class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioBaseDeGanancia = 1.15;
    }

    getEventos() {
        console.log(this.eventos);
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 300, fecha = new Date()) {
        const nuevoEvento = {
            id: this.eventos.length + 1,
            nombre,
            lugar,
            precio: precio * this.precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        };
        this.eventos.push(nuevoEvento);
    }

    agregarUsuario(eventoId, usuarioId) {
        const evento = this.eventos.find(e => e.id === eventoId);
        if (!evento) {
            console.error(`El evento con id ${eventoId} no existe.`);
            return;
        }
        if (evento.participantes.includes(usuarioId)) {
            console.error(`El usuario con id ${usuarioId} ya está registrado en el evento.`);
            return;
        }
        evento.participantes.push(usuarioId);
    }

    ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
        const eventoExistente = this.eventos.find(e => e.id === eventoId);
        if (!eventoExistente) {
            console.error(`El evento con id ${eventoId} no existe.`);
            return;
        }
        const nuevoEvento = {
            ...eventoExistente,
            id: this.eventos.length + 1,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        };
        this.eventos.push(nuevoEvento);
    }
}
const ticketManager = new TicketManager();
ticketManager.agregarEvento('Concierto de YSY A', 'Estadio GEBA', 3600);
console.log(ticketManager.getEventos());