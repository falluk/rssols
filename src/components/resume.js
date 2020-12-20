import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://lh3.googleusercontent.com/pw/ACtC-3fqi5dJLIjjB3nX19LePu2TWGtM_EZN2r8TU5tVYqeoMGkroXH138oLEinwB2rzEyRY-wqZHdB3TqpYYOKffIOGQ6IWCU3qBh9V48w3BlLu_kJr9IPSCOE2zCQQj-0FnnYZwFzokYxJdM4E8u5CyX04mg=w521-h694-no?authuser=0"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Roni Serra</h2>
            <h4 style={{color: 'grey'}}>Desenvolvedor</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Sou um apaixonado por tecnologia, busco projetos freelance, open-source ou remunerado, para aprimorar meu conhecimento em desenvolvimento.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Cidade</h5>
            <p>Presidente Prudente - SP</p>
            <h5>Cel</h5>
            <p>(18) 99712-7354</p>
            <h5>Email</h5>
            <p>roniblizz87@gmail.com</p>
            <h5>Web</h5>
            <a class="App-link" href="https://rssols.com.br/" target="_blank" rel="noopener noreferrer">RS Sols</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educação</h2>


            <Education
              startYear={2019}
              endYear={2021}
              schoolName="Unicesumar"
              schoolDescription="Curso de Gestão em TI, conclusão no final do ano de 2021"
               />

               
              <h2>Experiência</h2>

            <Experience
              startYear={2013}
              endYear={2018}
              jobName="R & R Provedor (Cabonnet)"
              jobDescription="Iniciei no suporte a clientes e técnicos (helpdesk), me tornando em menos de 1 ano Supervisor de operações
              consegui eliminar as ordens de serviço de forma impressa, diminuindo custo da operação."/>

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Energisa S.a"
                jobDescription="Atualmente sou técnico de informática, porém com auxílio de ferramentas de low code (Power apps, Share Point e Power Automate),
                consegui eliminar termos feitos em papel, facilitando no armazenamento e tomando o processo mais sustentável."/>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />

                <hr style={{borderTop: '3px solid #e22947'}} />
                <h2>Idiomas</h2>
                <Skills
                  skill="Português"
                  progress={80}
                  />
                  <Skills
                    skill="Inglês"
                    progress={45}
                    />
                    <Skills
                      skill="Espanhol"
                      progress={40}
                      />
                      <Skills
                        skill="Francês"
                        progress={15}
                        />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
