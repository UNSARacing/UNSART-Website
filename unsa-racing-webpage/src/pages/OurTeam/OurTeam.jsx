import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import teamCsv from '../../assets/OurTeam/Website 25_26_ListaClanova - Clanovi.csv?url';
import './OurTeam.css';

const images = import.meta.glob('../../assets/OurTeam/images/*.jpg', { eager: true });

const Subteams = () => {
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    Papa.parse(teamCsv, {
      download: true,
      header: true,
      complete: (results) => {
        const subteamTranslations = {
          'Aerodinamika': 'Aerodynamics',
          'Elektronika': 'Electronics',
          'Media & Marketing': 'Media & Marketing',
          'Software & IT': 'Software & IT',
          'Motor (pogonski sklopovi)': 'Powertrain',
          'Ovjes': 'Suspension',
          'Šasija': 'Chassis',
          'Statika': 'Statics',
          'Finansije': 'Finances',
          'Uprava': 'Management'
        };

        const groupedData = results.data.reduce((acc, member) => {
          const rawSubteam = member['Podtim ']?.trim(); 
          if (rawSubteam) {
            const englishSubteam = subteamTranslations[rawSubteam] || rawSubteam;
            if (!acc[englishSubteam]) {
              acc[englishSubteam] = [];
            }
            acc[englishSubteam].push(member);
          }
          return acc;
        }, {});

        // Sort members within each subteam: Team Lead first
        Object.keys(groupedData).forEach(subteam => {
          groupedData[subteam].sort((a, b) => {
            const roleA = a['Uloga'] || '';
            const roleB = b['Uloga'] || '';
            const isLeadA = roleA.toLowerCase().includes('team lead');
            const isLeadB = roleB.toLowerCase().includes('team lead');

            if (isLeadA && !isLeadB) return -1;
            if (!isLeadA && isLeadB) return 1;
            return 0; 
          });
        });

        // Create "Team Management" section using duplicates of Directors
        const directors = results.data.filter(member => 
          (member['Uloga'] || '').toLowerCase().includes('director')
        );

        const finalData = {};
        if (directors.length > 0) {
          finalData['Team Management'] = directors;
        }

        // Merge with existing groups (Team Management first)
        Object.assign(finalData, groupedData);

        setTeamData(finalData);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  }, []);

  const getMemberImage = (name) => {
    if (!name) return images['../../assets/OurTeam/images/default.jpg']?.default;
    
    // Convert name "Name Surname" to "Name-Surname.jpg"
    const filename = name.trim().replace(/\s+/g, '-') + '.jpg';
    const path = `../../assets/OurTeam/images/${filename}`;
    
    return images[path]?.default || images['../../assets/OurTeam/images/default.jpg']?.default;
  };

  return (
    <div className="our-team-container">
      <h1>Our Team</h1>
      {Object.keys(teamData).map((subteam) => (
        <div key={subteam} className="subteam-section">
          <h2>{subteam}</h2>
          <div className="members-grid">
            {teamData[subteam].map((member, index) => (
              <div key={index} className="member-card">
                <div className="img-container">
                   <img 
                    src={getMemberImage(member['Ime i Prezime'])} 
                    alt={member['Ime i Prezime']} 
                    onError={(e) => {
                      // Fallback if the image fails to load for reason other than missing key
                      e.target.src = images['../../assets/OurTeam/images/default.jpg']?.default;
                    }}
                  />
                </div>
                <h3>{member['Ime i Prezime']}</h3>
                <p>{member['Uloga']}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subteams;
