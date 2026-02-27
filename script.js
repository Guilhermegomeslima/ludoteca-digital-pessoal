// BANCO DE DADOS REVISADO (Grand Strategy alterado para Estratégia)
const bibliotecaJogos = [
    { titulo: "Romance of the Three Kingdoms XI", desenvolvedora: "Koei", ano: 2006, genero: "Estratégia", plataforma: "PS2", tempoJogo: "Centenas de horas", conquistas: null, notas: { mecanica: 94, enredo: 88, estetica: 89, retencao: 88, feeling: 95 }, notaFinal: 90.8 },
    { titulo: "Romance of the Three Kingdoms XIII", desenvolvedora: "Koei Tecmo", ano: 2016, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "40,4h", conquistas: null, notas: { mecanica: 85, enredo: 95, estetica: 83, retencao: 85, feeling: 90 }, notaFinal: 87.6 },
    { titulo: "Nobunaga's Ambition: Sphere of Influence", desenvolvedora: "Koei Tecmo", ano: 2015, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "72,1h", conquistas: null, notas: { mecanica: 90, enredo: 88, estetica: 87, retencao: 91, feeling: 93 }, notaFinal: 89.8 },
    { titulo: "Nobunaga's Ambition: S.O.I. Ascencion", desenvolvedora: "Koei Tecmo", ano: 2016, genero: "Estratégia", status: "Não Finalizado", plataforma: "PC (Steam)", tempoJogo: "3,6h", conquistas: null, notas: { mecanica: 82, enredo: 80, estetica: 85, retencao: 60, feeling: 70 }, notaFinal: 75.4 },
    { titulo: "Dynasty Warriors 3", desenvolvedora: "Omega Force", ano: 2001, genero: "Musou", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 76, enredo: 86, estetica: 76, retencao: 79, feeling: 86 }, notaFinal: 80.6 },
    { titulo: "Dynasty Warriors 5", desenvolvedora: "Omega Force", ano: 2005, genero: "Musou", status: "Não Finalizado", plataforma: "PS2", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 80, enredo: 85, estetica: 80, retencao: 77, feeling: 86 }, notaFinal: 81.6 },
    { titulo: "Dynasty Warriors 6 Empires", desenvolvedora: "Omega Force", ano: 2009, genero: "Musou", plataforma: "Xbox 360", tempoJogo: "Dezenas de horas", conquistas: null, notas: { mecanica: 77, enredo: 79, estetica: 85, retencao: 79, feeling: 82 }, notaFinal: 80.4 },
    { titulo: "Dynasty Warriors 7", desenvolvedora: "Omega Force", ano: 2011, genero: "Musou", plataforma: "Xbox 360", tempoJogo: "Dezenas de horas", conquistas: null, notas: { mecanica: 89, enredo: 88, estetica: 89, retencao: 83, feeling: 87 }, notaFinal: 87.2 },
    { titulo: "Dynasty Warriors 8 XL Complete Edition", desenvolvedora: "Omega Force", ano: 2014, genero: "Musou", plataforma: "PC (Steam)", tempoJogo: "27,4h", conquistas: { obtidas: 7, total: 44 }, notas: { mecanica: 91, enredo: 89, estetica: 88, retencao: 88, feeling: 92 }, notaFinal: 89.6 },
    { titulo: "Dynasty Warriors 8 Empires", desenvolvedora: "Omega Force", ano: 2015, genero: "Musou", plataforma: "PC (Steam)", tempoJogo: "18,9h", conquistas: { obtidas: 20, total: 48 }, notas: { mecanica: 90, enredo: 87, estetica: 89, retencao: 84, feeling: 90 }, notaFinal: 88.0 },
    { titulo: "Samurai Warriors 2", desenvolvedora: "Omega Force", ano: 2006, genero: "Musou", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 87, enredo: 95, estetica: 96, retencao: 87, feeling: 96 }, notaFinal: 92.2 },
    { titulo: "Samurai Warriors 2 Empires", desenvolvedora: "Omega Force", ano: 2006, genero: "Musou", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 87, enredo: 90, estetica: 96, retencao: 89, feeling: 97 }, notaFinal: 91.8 },
    { titulo: "Samurai Warriors 4 DX", desenvolvedora: "Omega Force", ano: 2019, genero: "Musou",status: "Jogando", plataforma: "PC (Steam)", tempoJogo: "46h", conquistas: { obtidas: 43, total: 54 }, notas: { mecanica: 93, enredo: 87, estetica: 93, retencao: 92, feeling: 97 }, notaFinal: 92.4 },
    { titulo: "Samurai Warriors 4-II", desenvolvedora: "Omega Force", ano: 2015, genero: "Musou", plataforma: "PC (Steam)", tempoJogo: "16,9h", conquistas: { obtidas: 17, total: 54 }, notas: { mecanica: 89, enredo: 82, estetica: 86, retencao: 82, feeling: 84 }, notaFinal: 84.6 },
    { titulo: "Samurai Warriors 5", desenvolvedora: "Omega Force", ano: 2021, genero: "Musou", plataforma: "PC (Steam)", tempoJogo: "32,7h", conquistas: { obtidas: 31, total: 56 }, notas: { mecanica: 92, enredo: 91, estetica: 84, retencao: 89, feeling: 94 }, notaFinal: 90.0 },
    { titulo: "Warriors Orochi 1", desenvolvedora: "Omega Force", ano: 2007, genero: "Musou", plataforma: "PS2", tempoJogo: "Dezenas de horas", conquistas: null, notas: { mecanica: 87, enredo: 82, estetica: 87, retencao: 88, feeling: 91 }, notaFinal: 87.0 },
    { titulo: "Warriors Orochi 2", desenvolvedora: "Omega Force", ano: 2008, genero: "Musou", status: "Não Finalizado (Pretendo)", plataforma: "PS2", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 87, enredo: 84, estetica: 88, retencao: 88, feeling: 91 }, notaFinal: 87.6 },
    { titulo: "Warriors Orochi 3 U.E.", desenvolvedora: "Omega Force", ano: 2022, genero: "Musou", status: "Não Finalizado", plataforma: "PC (Steam)", tempoJogo: "Só testado", conquistas: { obtidas: 4, total: 44 }, notas: { mecanica: 90, enredo: 86, estetica: 89, retencao: 89, feeling: 92 }, notaFinal: 88.0 },
    { titulo: "Shinobido: The Way of the Ninja", desenvolvedora: "Acquire", ano: 2005, genero: "Stealth", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 93, enredo: 92, estetica: 86, retencao: 89, feeling: 94 }, notaFinal: 90.8 },
    { titulo: "Metal Gear Solid 3: Snake Eater", desenvolvedora: "Konami", ano: 2004, genero: "Stealth", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 98, enredo: 98, estetica: 94, retencao: 93, feeling: 99 }, notaFinal: 96.4, audio: "audios/Soundtrack Snake Eater.m4a", anotacao: "Roda perfeito no PCSX2. Obra-prima absoluta." },
    { titulo: "Syphon Filter: Omega Strain", desenvolvedora: "SCE Bend Studio", ano: 2004, genero: "Stealth / Shooter", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 84, enredo: 86, estetica: 85, retencao: 88, feeling: 89 }, notaFinal: 86.4 },
    { titulo: "Splinter Cell: Pandora Tomorrow", desenvolvedora: "Ubisoft", ano: 2004, genero: "Stealth", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 90, enredo: 86, estetica: 87, retencao: 85, feeling: 87 }, notaFinal: 87.0 },
    { titulo: "Splinter Cell: Chaos Theory", desenvolvedora: "Ubisoft", ano: 2005, genero: "Stealth", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 93, enredo: 90, estetica: 89, retencao: 89, feeling: 94 }, notaFinal: 91.0 },
    { titulo: "Hitman 2: Silent Assassin", desenvolvedora: "IO Interactive", ano: 2002, genero: "Stealth", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 84, enredo: 87, estetica: 84, retencao: 81, feeling: 85 }, notaFinal: 84.2 },
    { titulo: "Hitman: Absolution", desenvolvedora: "IO Interactive", ano: 2012, genero: "Stealth", status: "Não Finalizado", plataforma: "Xbox 360", tempoJogo: "Campanha incompleta", conquistas: null, notas: { mecanica: 87, enredo: 80, estetica: 81, retencao: 79, feeling: 84 }, notaFinal: 82.2 },
    { titulo: "Assassin's Creed II", desenvolvedora: "Ubisoft", ano: 2009, genero: "Ação", plataforma: "PC (Steam)", tempoJogo: "18,6h", conquistas: null, notas: { mecanica: 90, enredo: 94, estetica: 90, retencao: 90, feeling: 92 }, notaFinal: 91.2 },
    { titulo: "Assassin's Creed IV: Black Flag", desenvolvedora: "Ubisoft", ano: 2013, genero: "Ação", plataforma: "Xbox 360", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 96, enredo: 91, estetica: 92, retencao: 96, feeling: 98 }, notaFinal: 94.6 },
    { titulo: "Tomb Raider", desenvolvedora: "Crystal Dynamics", ano: 2013, genero: "Ação / Aventura", plataforma: "PC (Steam)", tempoJogo: "9,7h", conquistas: { obtidas: 16, total: 50 }, notas: { mecanica: 92, enredo: 87, estetica: 91, retencao: 92, feeling: 95 }, notaFinal: 91.4 },
    { titulo: "Rise of the Tomb Raider", desenvolvedora: "Eidos-Montréal", ano: 2018, genero: "Ação / Aventura", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 94, enredo: 91, estetica: 93, retencao: 93, feeling: 97 }, notaFinal: 93.6 },
    { titulo: "Red Dead Revolver", desenvolvedora: "Rockstar San Diego", ano: 2004, genero: "Ação", plataforma: "PS2", tempoJogo: "100% completo", conquistas: null, notas: { mecanica: 83, enredo: 93, estetica: 87, retencao: 90, feeling: 95 }, notaFinal: 89.6 },
    { titulo: "Red Dead Redemption", desenvolvedora: "Rockstar San Diego", ano: 2010, genero: "Ação / Aventura", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 93, enredo: 90, estetica: 90, retencao: 94, feeling: 96 }, notaFinal: 92.6 },
    { titulo: "Bully", desenvolvedora: "Rockstar Vancouver", ano: 2006, genero: "Ação / Aventura", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 89, enredo: 88, estetica: 87, retencao: 87, feeling: 88 }, notaFinal: 87.8 },
    { titulo: "The Punisher", desenvolvedora: "Volition", ano: 2005, genero: "Ação / Shooter", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 86, enredo: 89, estetica: 84, retencao: 85, feeling: 88 }, notaFinal: 86.0 },
    { titulo: "True Crime: New York City", desenvolvedora: "Luxoflux", ano: 2005, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 88, enredo: 82, estetica: 83, retencao: 81, feeling: 85 }, notaFinal: 83.8 },
    { titulo: "The Godfather", desenvolvedora: "EA Redwood Shores", ano: 2006, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 89, enredo: 90, estetica: 86, retencao: 85, feeling: 93 }, notaFinal: 88.6 },
    { titulo: "Mercenaries: Playground of Destruction", desenvolvedora: "Pandemic Studios", ano: 2005, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 86, enredo: 85, estetica: 82, retencao: 86, feeling: 90 }, notaFinal: 85.8 },
    { titulo: "God of War", desenvolvedora: "Santa Monica Studio", ano: 2005, genero: "Ação / Hack and Slash", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 88, enredo: 91, estetica: 89, retencao: 89, feeling: 94 }, notaFinal: 90.2 },
    { titulo: "God of War II", desenvolvedora: "Santa Monica Studio", ano: 2007, genero: "Ação / Hack and Slash", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 90, enredo: 94, estetica: 93, retencao: 91, feeling: 95 }, notaFinal: 92.6 },
    { titulo: "Resident Evil 5", desenvolvedora: "Capcom", ano: 2009, genero: "Ação / Terror", status: "Não Finalizado", plataforma: "Xbox 360", tempoJogo: "Campanha incompleta", conquistas: null, notas: { mecanica: 88, enredo: 89, estetica: 86, retencao: 86, feeling: 87 }, notaFinal: 87.2 },
    { titulo: "BloodRayne", desenvolvedora: "Terminal Reality", ano: 2002, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 70, enredo: 78, estetica: 80, retencao: 74, feeling: 76 }, notaFinal: 75.6 },
    { titulo: "Left 4 Dead", desenvolvedora: "Valve", ano: 2008, genero: "FPS / Sobrevivência", status: "Não Finalizado", plataforma: "Xbox 360", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 85, enredo: 75, estetica: 79, retencao: 77, feeling: 75 }, notaFinal: 78.2 },
    { titulo: "Left 4 Dead 2", desenvolvedora: "Valve", ano: 2009, genero: "FPS / Sobrevivência", status: "Não Finalizado", plataforma: "Xbox 360", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 86, enredo: 75, estetica: 80, retencao: 80, feeling: 78 }, notaFinal: 79.8 },
    { titulo: "Call of Duty 3", desenvolvedora: "Treyarch", ano: 2006, genero: "FPS", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 84, enredo: 85, estetica: 84, retencao: 80, feeling: 80 }, notaFinal: 82.6 },
    { titulo: "Call of Duty: Modern Warfare", desenvolvedora: "Infinity Ward", ano: 2007, genero: "FPS", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 88, enredo: 87, estetica: 85, retencao: 83, feeling: 86 }, notaFinal: 85.8 },
    { titulo: "Call of Duty: World at War", desenvolvedora: "Treyarch", ano: 2008, genero: "FPS", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 89, enredo: 89, estetica: 89, retencao: 83, feeling: 87 }, notaFinal: 87.4 },
    { titulo: "Call of Duty: Modern Warfare 2", desenvolvedora: "Infinity Ward", ano: 2009, genero: "FPS", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 90, enredo: 91, estetica: 88, retencao: 86, feeling: 91 }, notaFinal: 89.2 },
    { titulo: "Commandos: Strike Force", desenvolvedora: "Pyro Studios", ano: 2006, genero: "FPS / Stealth", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 80, enredo: 81, estetica: 83, retencao: 80, feeling: 85 }, notaFinal: 81.8 },
    { titulo: "Arma 2", desenvolvedora: "Bohemia Interactive", ano: 2009, genero: "FPS / Simulação", plataforma: "PC (Steam)", tempoJogo: "27,2h", conquistas: null, notas: { mecanica: 91, enredo: 77, estetica: 80, retencao: 82, feeling: 86 }, notaFinal: 83.2 },
    { titulo: "Metal Slug Anthology", desenvolvedora: "SNK", ano: 2006, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanhas finalizadas", conquistas: null, notas: { mecanica: 84, enredo: 80, estetica: 82, retencao: 83, feeling: 82 }, notaFinal: 82.2 },
    { titulo: "Star Wars: Battlefront", desenvolvedora: "Pandemic Studios", ano: 2004, genero: "Shooter", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 85, enredo: 78, estetica: 83, retencao: 80, feeling: 79 }, notaFinal: 81.0 },
    { titulo: "Star Wars: Battlefront II", desenvolvedora: "Pandemic Studios", ano: 2005, genero: "Shooter", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 87, enredo: 82, estetica: 86, retencao: 85, feeling: 86 }, notaFinal: 85.0 },
    { titulo: "Lego Star Wars: The Complete Saga", desenvolvedora: "Traveller's Tales", ano: 2007, genero: "Ação / Aventura", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 84, enredo: 86, estetica: 86, retencao: 82, feeling: 83 }, notaFinal: 84.2 },
    { titulo: "Lego Indiana Jones", desenvolvedora: "Traveller's Tales", ano: 2008, genero: "Ação / Aventura", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 80, enredo: 85, estetica: 84, retencao: 78, feeling: 82 }, notaFinal: 81.8 },
    { titulo: "Lego Batman: The Video Game", desenvolvedora: "Traveller's Tales", ano: 2008, genero: "Ação / Aventura", plataforma: "PS2", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 86, enredo: 88, estetica: 86, retencao: 82, feeling: 85 }, notaFinal: 85.4 },
    { titulo: "Lego Harry Potter: Years 1-4", desenvolvedora: "Traveller's Tales", ano: 2010, genero: "Ação / Aventura", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 87, enredo: 88, estetica: 89, retencao: 84, feeling: 87 }, notaFinal: 87.0 },
    { titulo: "Lego Pirates of the Caribbean", desenvolvedora: "Traveller's Tales", ano: 2011, genero: "Ação / Aventura", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 85, enredo: 86, estetica: 86, retencao: 80, feeling: 84 }, notaFinal: 84.2 },
    { titulo: "Tekken 5", desenvolvedora: "Namco", ano: 2005, genero: "Luta", plataforma: "PS2", tempoJogo: "Campanha finalizada e extras", conquistas: null, notas: { mecanica: 86, enredo: 89, estetica: 88, retencao: 88, feeling: 89 }, notaFinal: 88.0 },
    { titulo: "Tekken 6", desenvolvedora: "Bandai Namco", ano: 2007, genero: "Luta", plataforma: "Xbox 360", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 88, enredo: 89, estetica: 89, retencao: 86, feeling: 87 }, notaFinal: 87.8 },
    { titulo: "Naruto Shippuden: Ultimate Ninja Storm 3 FB", desenvolvedora: "CyberConnect2", ano: 2013, genero: "Luta", plataforma: "PC (Steam)", tempoJogo: "37h", conquistas: { obtidas: 54, total: 54 }, notas: { mecanica: 94, enredo: 95, estetica: 94, retencao: 96, feeling: 98 }, notaFinal: 95.4 },
    { titulo: "Hearts of Iron IV", desenvolvedora: "Paradox Development Studio", ano: 2016, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "6,8h", conquistas: { obtidas: 0, total: 266 }, notas: { mecanica: 87, enredo: 83, estetica: 75, retencao: 75, feeling: 83 }, notaFinal: 80.6 },
    { titulo: "Europa Universalis III", desenvolvedora: "Paradox Development Studio", ano: 2007, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "7h", conquistas: null, notas: { mecanica: 82, enredo: 84, estetica: 81, retencao: 76, feeling: 80 }, notaFinal: 80.6 },
    { titulo: "Victoria II", desenvolvedora: "Paradox Development Studio", ano: 2010, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 75, enredo: 72, estetica: 70, retencao: 74, feeling: 75 }, notaFinal: 73.2 },
    { titulo: "Age of History 3", desenvolvedora: "Łukasz Jakowski", ano: 2024, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "46,8h", conquistas: { obtidas: 13, total: 93 }, notas: { mecanica: 78, enredo: 72, estetica: 82, retencao: 87, feeling: 86 }, notaFinal: 81.0, linkSteam: "https://store.steampowered.com/app/2772750/Age_of_History_3/" },
    { titulo: "Prison Architect", desenvolvedora: "Introversion Software", ano: 2015, genero: "Simulação", plataforma: "PC (Steam)", tempoJogo: "7,2h", conquistas: { obtidas: 2, total: 18 }, notas: { mecanica: 87, enredo: 78, estetica: 79, retencao: 79, feeling: 81 }, notaFinal: 80.8 },
    { titulo: "Papers, Please", desenvolvedora: "3909 LLC", ano: 2013, genero: "Simulação", plataforma: "PC (Steam)", tempoJogo: "9,6h", conquistas: { obtidas: 6, total: 13 }, notas: { mecanica: 85, enredo: 85, estetica: 85, retencao: 84, feeling: 85 }, notaFinal: 84.8 },
    { titulo: "Reigns", desenvolvedora: "Nerial", ano: 2016, genero: "Estratégia", status: "Não Finalizado", plataforma: "PC (Steam)", tempoJogo: "1,3h", conquistas: { obtidas: 2, total: 13 }, notas: { mecanica: 80, enredo: 82, estetica: 78, retencao: 80, feeling: 76 }, notaFinal: 79.2 },
    { titulo: "Lapse", desenvolvedora: "Cornago Stefano", ano: 2017, genero: "Estratégia", plataforma: "Mobile", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 79, enredo: 85, estetica: 80, retencao: 82, feeling: 79 }, notaFinal: 81.0 },
    { titulo: "Lapse: A Forgotten Future", desenvolvedora: "Cornago Stefano", ano: 2017, genero: "Estratégia", status: "Não Finalizado", plataforma: "Mobile", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 80, enredo: 86, estetica: 82, retencao: 81, feeling: 81 }, notaFinal: 82.0 },
    { titulo: "Stardew Valley", desenvolvedora: "ConcernedApe", ano: 2016, genero: "RPG / Simulação", plataforma: "PC (Steam)", tempoJogo: "15,3h", conquistas: { obtidas: 3, total: 49 }, notas: { mecanica: 84, enredo: 80, estetica: 86, retencao: 83, feeling: 83 }, notaFinal: 83.2 },
    { titulo: "Minecraft", desenvolvedora: "Mojang", ano: 2011, genero: "Sandbox / Sobrevivência", plataforma: "Mobile", tempoJogo: "Dezenas de horas", conquistas: null, notas: { mecanica: 90, enredo: 79, estetica: 85, retencao: 84, feeling: 87 }, notaFinal: 85.0 },
    { titulo: "Ultimate Chicken Horse", desenvolvedora: "Clever Endeavour Games", ano: 2016, genero: "Party", plataforma: "PC (Steam)", tempoJogo: "0,8h", conquistas: { obtidas: 2, total: 31 }, notas: { mecanica: 83, enredo: null, estetica: 80, retencao: 80, feeling: 80 }, notaFinal: 80.75 },
    { titulo: "Mortal Kombat: Shaolin Monks", desenvolvedora: "Midway Studios", ano: 2005, genero: "Luta / Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 85, enredo: 85, estetica: 84, retencao: 80, feeling: 89 }, notaFinal: 84.6 },
    { titulo: "Mortal Kombat: Deception", desenvolvedora: "Midway Games", ano: 2004, genero: "Luta", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 83, enredo: 85, estetica: 83, retencao: 80, feeling: 85 }, notaFinal: 83.2 },
    { titulo: "Mortal Kombat: Armageddon", desenvolvedora: "Midway Games", ano: 2006, genero: "Luta", plataforma: "PS2", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 78, enredo: 77, estetica: 85, retencao: 78, feeling: 82 }, notaFinal: 80.0 },
    { titulo: "Mortal Kombat 9", desenvolvedora: "NetherRealm Studios", ano: 2011, genero: "Luta", plataforma: "Xbox 360", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 89, enredo: 83, estetica: 86, retencao: 82, feeling: 86 }, notaFinal: 85.2 },
    { titulo: "Dragon Ball Z: Budokai Tenkaichi 3", desenvolvedora: "Spike", ano: 2007, genero: "Luta", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 86, enredo: 87, estetica: 86, retencao: 82, feeling: 88 }, notaFinal: 85.8 },
    { titulo: "Naruto Shippuden: Ultimate Ninja 5", desenvolvedora: "CyberConnect2", ano: 2007, genero: "Luta", plataforma: "PS2", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 85, enredo: 85, estetica: 85, retencao: 85, feeling: 89 }, notaFinal: 85.8 },
    { titulo: "Guitar Hero 3", desenvolvedora: "Neversoft", ano: 2007, genero: "Ritmo", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 86, enredo: 83, estetica: 85, retencao: 84, feeling: 85 }, notaFinal: 84.6 },
    { titulo: "Fifa Street", desenvolvedora: "EA Canada", ano: 2012, genero: "Esportes", plataforma: "Xbox 360", tempoJogo: "Incontáveis horas", conquistas: null, notas: { mecanica: 88, enredo: 82, estetica: 85, retencao: 88, feeling: 82 }, notaFinal: 85.0 },
    { titulo: "PES 2018/Patch", desenvolvedora: "Konami", ano: 2017, genero: "Esportes", plataforma: "Xbox 360", tempoJogo: "Infinitas horas", conquistas: null, notas: { mecanica: 86, enredo: 80, estetica: 84, retencao: 90, feeling: 85 }, notaFinal: 85.0 },
    { titulo: "Crash Nitro Kart", desenvolvedora: "Vicarious Visions", ano: 2003, genero: "Corrida / Esportes", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 79, enredo: 77, estetica: 82, retencao: 78, feeling: 80 }, notaFinal: 79.2 },
    { titulo: "Bionicle Heroes", desenvolvedora: "Traveller's Tales", ano: 2006, genero: "Ação", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 79, enredo: 75, estetica: 80, retencao: 80, feeling: 80 }, notaFinal: 78.8 },
    { titulo: "Asterix At The Olympic Games", desenvolvedora: "Étranges Libellules", ano: 2007, genero: "Party / Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 79, enredo: 82, estetica: 83, retencao: 81, feeling: 82 }, notaFinal: 81.4 },
    { titulo: "Cuphead", desenvolvedora: "Studio MDHR", ano: 2017, genero: "Plataforma", plataforma: "PC (Steam)", tempoJogo: "3,6h", conquistas: { obtidas: 6, total: 42 }, notas: { mecanica: 86, enredo: 80, estetica: 84, retencao: 84, feeling: 83 }, notaFinal: 83.4 },
    { titulo: "Mount and Blade Warband", desenvolvedora: "TaleWorlds Entertainment", ano: 2010, genero: "RPG / Estratégia", plataforma: "PC (Steam)", tempoJogo: "5,4h", conquistas: { obtidas: 5, total: 80 }, notas: { mecanica: 82, enredo: 86, estetica: 78, retencao: 83, feeling: 84 }, notaFinal: 82.6 },
    { titulo: "Plague Inc", desenvolvedora: "Ndemic Creations", ano: 2012, genero: "Estratégia", plataforma: "PC (Steam)", tempoJogo: "3h", conquistas: { obtidas: 20, total: 237 }, notas: { mecanica: 82, enredo: null, estetica: 81, retencao: 75, feeling: 68 }, notaFinal: 76.5 },
    { titulo: "Game Dev Tycoon", desenvolvedora: "Greenheart Games", ano: 2012, genero: "Simulação", plataforma: "PC (Steam)", tempoJogo: "1,9h", conquistas: { obtidas: 4, total: 35 }, notas: { mecanica: 74, enredo: 72, estetica: 76, retencao: 70, feeling: 70 }, notaFinal: 72.4 },
    { titulo: "GTA San Andreas", desenvolvedora: "Rockstar North", ano: 2004, genero: "Ação", plataforma: "PS2", tempoJogo: "Dezenas de horas", conquistas: null, notas: { mecanica: 85, enredo: 81, estetica: 80, retencao: 78, feeling: 86 }, notaFinal: 82.0 },
    { titulo: "Mercenaries 2 World in flames", desenvolvedora: "Pandemic Studios", ano: 2008, genero: "Ação", plataforma: "Xbox 360", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 87, enredo: 80, estetica: 81, retencao: 81, feeling: 81 }, notaFinal: 82.0 },
    { titulo: "Mortal kombat Trilogy", desenvolvedora: "Midway Games", ano: 1996, genero: "Luta", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 70, enredo: 75, estetica: 76, retencao: 62, feeling: 70 }, notaFinal: 70.6 },
    { titulo: "Mortal kombat deadly alliance", desenvolvedora: "Midway Games", ano: 2002, genero: "Luta", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 78, enredo: 80, estetica: 80, retencao: 75, feeling: 80 }, notaFinal: 78.6 },
    { titulo: "The Sims 3", desenvolvedora: "Maxis", ano: 2009, genero: "Simulação", plataforma: "Xbox 360", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 82, enredo: 74, estetica: 75, retencao: 70, feeling: 75 }, notaFinal: 75.2 },
    { titulo: "Gun", desenvolvedora: "Neversoft", ano: 2005, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 84, enredo: 84, estetica: 87, retencao: 79, feeling: 85 }, notaFinal: 83.8 },
    { titulo: "Black", desenvolvedora: "Criterion Games", ano: 2006, genero: "FPS", plataforma: "PS2", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 88, enredo: 80, estetica: 87, retencao: 79, feeling: 86 }, notaFinal: 84.0 },
    { titulo: "Swat Global strike team", desenvolvedora: "Argonaut Games", ano: 2003, genero: "FPS / Ação", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 87, enredo: 82, estetica: 81, retencao: 80, feeling: 84 }, notaFinal: 82.8 },
    { titulo: "Killzone", desenvolvedora: "Guerrilla Games", ano: 2004, genero: "FPS", plataforma: "PS2", tempoJogo: "Tempo razoável", conquistas: null, notas: { mecanica: 82, enredo: 81, estetica: 85, retencao: 80, feeling: 83 }, notaFinal: 82.2 },
    { titulo: "Destroy all humans", desenvolvedora: "Pandemic Studios", ano: 2005, genero: "Ação", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 86, enredo: 80, estetica: 85, retencao: 82, feeling: 83 }, notaFinal: 83.2 },
    { titulo: "Tony Hawk's Underground 2", desenvolvedora: "Neversoft", ano: 2004, genero: "Esportes", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 87, enredo: 85, estetica: 86, retencao: 85, feeling: 89 }, notaFinal: 86.4 },
    { titulo: "Shadow of the colossus", desenvolvedora: "Team Ico", ano: 2005, genero: "Ação / Aventura", plataforma: "PS2", tempoJogo: "Poucas horas", conquistas: null, notas: { mecanica: 90, enredo: 84, estetica: 88, retencao: 81, feeling: 88 }, notaFinal: 86.2 },
    { titulo: "Toy story 3", desenvolvedora: "Avalanche Software", ano: 2010, genero: "Plataforma", plataforma: "PS2", tempoJogo: "Campanha finalizada", conquistas: null, notas: { mecanica: 81, enredo: 83, estetica: 84, retencao: 80, feeling: 80 }, notaFinal: 81.6 }
];

bibliotecaJogos.forEach(jogo => {
    if (!jogo.capa) {
        const nomeFormatado = jogo.titulo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.webp';
        jogo.capa = `img/${nomeFormatado}`;
    }
    jogo.status = jogo.status || "Finalizado"; 
    
    jogo.linksDinamicos = [];
    const nomeBusca = encodeURIComponent(jogo.titulo);

    
    if (jogo.plataforma.includes("Steam") || jogo.plataforma.includes("PC") || jogo.plataforma.includes("PS2") || jogo.linkSteam) {
        jogo.linksDinamicos.push({ nome: "🎮 Steam", url: jogo.linkSteam || `https://store.steampowered.com/search/?term=${nomeBusca}`, classe: "steam" });
    }
    
    if (jogo.plataforma.includes("Steam") || jogo.plataforma.includes("PC")) {
        jogo.linksDinamicos.push({ nome: "☁️ Nuuvem", url: `https://www.nuuvem.com/br-pt/catalog/search/${nomeBusca}`, classe: "nuuvem" });
    }
    
    if (jogo.plataforma.includes("PS2")) {
        jogo.linksDinamicos.push({ nome: "🕹️ Emulador PCSX2", url: "https://pcsx2.net/", classe: "ps2" });
    }
});

let jogosExibidos = [...bibliotecaJogos];

const gridContainer = document.getElementById('jogos-grid');
const modal = document.getElementById('modal');
const btnFecharModal = document.getElementById('fechar-modal');
const btnThemeToggle = document.getElementById('theme-toggle');

btnThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    btnThemeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙 Modo Escuro' : '☀️ Modo Claro';
});

const atualizarDashboard = () => {
    document.getElementById('stat-total').textContent = jogosExibidos.length;
    
    if (jogosExibidos.length === 0) {
        document.getElementById('stat-media').textContent = "0";
        document.getElementById('stat-plataforma').textContent = "-";
        return;
    }

    const media = jogosExibidos.reduce((acc, j) => acc + j.notaFinal, 0) / jogosExibidos.length;
    document.getElementById('stat-media').textContent = media.toFixed(1).replace('.', ',');
    
    const contagem = {}; let topPlataforma = '-'; let max = 0;
    jogosExibidos.forEach(j => {
        contagem[j.plataforma] = (contagem[j.plataforma] || 0) + 1;
        if (contagem[j.plataforma] > max) { max = contagem[j.plataforma]; topPlataforma = j.plataforma; }
    });
    document.getElementById('stat-plataforma').textContent = topPlataforma;
};

const extrairTempo = (texto) => {
    if (!texto) return 0;
    const match = texto.match(/(\d+)(?:[,.](\d+))?\s*h/i);
    if (match) return parseFloat(match[1] + '.' + (match[2] || '0'));
    // Pesos para texto
    const lower = texto.toLowerCase();
    if (lower.includes('infinitas') || lower.includes('incontáveis')) return 300;
    if (lower.includes('centenas')) return 150;
    if (lower.includes('dezenas')) return 50;
    if (lower.includes('100%')) return 40;
    if (lower.includes('finalizada')) return 20; 
    if (lower.includes('razoável')) return 10;
    if (lower.includes('poucas')) return 6;
    if (lower.includes('testado') || lower.includes('impressões')) return 2;
    return 0;
};

const extrairConquistas = (conquistas) => {
    if (!conquistas || !conquistas.total) return -1; 
    return (conquistas.obtidas / conquistas.total) * 100;
};

const inputBusca = document.getElementById('busca-input');
const selectOrdenacao = document.getElementById('ordenacao-select');
const filtrosContainer = document.getElementById('filtros-container');

const categoriasFiltro = ["Todos", "PS2", "Steam", "Xbox 360", "Ação", "Estratégia", "Musou", "Stealth", "RPG", "FPS", "Luta", "Simulação", "Esportes", "Plataforma"];

categoriasFiltro.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'btn-filtro' + (cat === 'Todos' ? ' ativo' : '');
    btn.textContent = cat;
    btn.dataset.filtro = cat;
    btn.addEventListener('click', () => aplicarFiltro(cat, btn));
    filtrosContainer.appendChild(btn);
});

let filtroAtual = "Todos";

const aplicarFiltro = (categoria, botaoClicado) => {
    document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('ativo'));
    botaoClicado.classList.add('ativo');
    filtroAtual = categoria;
    processarExibicao();
};

inputBusca.addEventListener('input', () => processarExibicao());
selectOrdenacao.addEventListener('change', () => processarExibicao());

const processarExibicao = () => {
    let filtrados = bibliotecaJogos;
    if (filtroAtual !== "Todos") {
        filtrados = filtrados.filter(j => j.plataforma.includes(filtroAtual) || j.genero.includes(filtroAtual));
    }

    const texto = inputBusca.value.toLowerCase();
    if (texto) {
        filtrados = filtrados.filter(j => j.titulo.toLowerCase().includes(texto));
    }

    const ordem = selectOrdenacao.value;
    filtrados.sort((a, b) => {
        if (ordem === 'notaDesc') return b.notaFinal - a.notaFinal;
        if (ordem === 'notaAsc') return a.notaFinal - b.notaFinal;
        if (ordem === 'anoDesc') return b.ano - a.ano;
        if (ordem === 'anoAsc') return a.ano - b.ano;
        if (ordem === 'tempoDesc') return extrairTempo(b.tempoJogo) - extrairTempo(a.tempoJogo);
        if (ordem === 'conquistasDesc') return extrairConquistas(b.conquistas) - extrairConquistas(a.conquistas);
    });

    jogosExibidos = filtrados;
    atualizarDashboard(); 
    renderizarJogos();
};

document.getElementById('btn-roleta').addEventListener('click', () => {
    const pendentes = bibliotecaJogos.filter(j => j.status !== "Finalizado");
    if (pendentes.length === 0) return alert("Incrível! Você já finalizou todos os jogos da sua lista!");
    const sorteado = pendentes[Math.floor(Math.random() * pendentes.length)];
    abrirModal(bibliotecaJogos.indexOf(sorteado));
});

const formatarNota = (nota) => Number.isInteger(nota) ? nota.toFixed(1).replace('.', ',') : nota.toString().replace('.', ',');

const renderizarJogos = () => {
    gridContainer.innerHTML = ''; 
    
    if (jogosExibidos.length === 0) {
        gridContainer.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; color: var(--red-accent);">Nenhum jogo encontrado no filtro!</h3>`;
        return;
    }

    jogosExibidos.forEach((jogo, index) => {
        const card = document.createElement('div');
        
        let rankClass = 'rank-standard';
        if (index === 0) rankClass = 'rank-gold';
        else if (index === 1) rankClass = 'rank-silver';
        else if (index === 2) rankClass = 'rank-bronze';
        else if (index >= 3 && index <= 9) rankClass = 'rank-premium';

        card.classList.add('card', rankClass);
        const indexReal = bibliotecaJogos.indexOf(jogo);
        card.addEventListener('click', () => abrirModal(indexReal));

        card.innerHTML = `
            <div class="badge-nota">${formatarNota(jogo.notaFinal)}</div>
            <img src="${jogo.capa}" alt="Capa de ${jogo.titulo}">
            <div class="card-info">
                <h3>${jogo.titulo}</h3>
            </div>
        `;
        gridContainer.appendChild(card);
    });
};

const abrirModal = (index) => {
    const jogo = bibliotecaJogos[index];
    
    document.getElementById('modal-capa').src = jogo.capa;
    document.getElementById('modal-titulo').textContent = jogo.titulo;
    document.getElementById('modal-nota-final').textContent = formatarNota(jogo.notaFinal);
    document.getElementById('modal-plataforma').textContent = jogo.plataforma;
    document.getElementById('modal-dev').textContent = jogo.desenvolvedora;
    document.getElementById('modal-genero').textContent = jogo.genero;
    document.getElementById('modal-ano').textContent = jogo.ano;
    
    const spanStatus = document.getElementById('modal-status');
    spanStatus.textContent = jogo.status;
    if (jogo.status === 'Jogando') spanStatus.className = 'status-badge status-jogando';
    else if (jogo.status.includes('Não Finalizado') || jogo.status === 'Pausado') spanStatus.className = 'status-badge status-nao-finalizado';
    else spanStatus.className = 'status-badge status-finalizado';

    document.getElementById('modal-tempo-jogo').innerHTML = `⏱️ <strong>Tempo:</strong> ${jogo.tempoJogo}`;

    const containerConquistas = document.getElementById('modal-conquistas-container');
    if (jogo.conquistas) {
        const pct = Math.round((jogo.conquistas.obtidas / jogo.conquistas.total) * 100);
        containerConquistas.innerHTML = `
            <div class="conquistas-box">
                <div class="conquistas-header"><span>🏆 Conquistas</span><span>${jogo.conquistas.obtidas} / ${jogo.conquistas.total} (${pct}%)</span></div>
                <div class="conquista-bg"><div class="conquista-fill" style="width: ${pct}%;"></div></div>
            </div>`;
    } else { containerConquistas.innerHTML = ''; }

    const containerAtributos = document.querySelector('.atributos-container');
    const labelsAtributos = { mecanica: "Mecânica", enredo: "Enredo", estetica: "Estética", retencao: "Retenção", feeling: "Feeling" };
    let htmlBarras = '';
    for (const [chave, valor] of Object.entries(jogo.notas)) {
        const displayValor = valor === null ? "N/A" : `${valor}/100`;
        const larguraBarra = valor === null ? 0 : valor;
        const corBarra = valor === null ? "#555" : "var(--red-accent)";
        htmlBarras += `
            <div class="atributo">
                <div class="atributo-header"><span>${labelsAtributos[chave]}</span><span>${displayValor}</span></div>
                <div class="bar-bg"><div class="bar-fill" style="width: ${larguraBarra}%; background-color: ${corBarra};"></div></div>
            </div>`;
    }
    containerAtributos.innerHTML = htmlBarras;
    
    const audioContainer = document.getElementById('modal-audio-container');
    if (jogo.audio) {
        audioContainer.innerHTML = `<audio controls autoplay style="width: 100%; margin-top: 15px; height: 35px; border-radius: 5px; opacity: 0.8;"><source src="${jogo.audio}" type="audio/mpeg"></audio>`;
    } else { audioContainer.innerHTML = ''; }

    const linksContainer = document.getElementById('modal-links');
    if (jogo.linksDinamicos.length > 0) {
        let botoesHTML = '';
        jogo.linksDinamicos.forEach(link => {
            botoesHTML += `<a href="${link.url}" target="_blank" class="btn-loja ${link.classe}">${link.nome}</a>`;
        });
        linksContainer.innerHTML = botoesHTML;
    } else { linksContainer.innerHTML = ''; }

    const anotacoesContainer = document.getElementById('modal-anotacoes');
    if (jogo.anotacao) {
        anotacoesContainer.innerHTML = `<div class="anotacao-box">${jogo.anotacao}</div>`;
    } else { anotacoesContainer.innerHTML = ''; }

    modal.classList.remove('hidden');
};

const fecharModal = () => {
    modal.classList.add('hidden');
    document.getElementById('modal-audio-container').innerHTML = ''; 
};

btnFecharModal.addEventListener('click', fecharModal);
modal.addEventListener('click', (evento) => { if (evento.target === modal) fecharModal(); });

// Inicializa
processarExibicao();