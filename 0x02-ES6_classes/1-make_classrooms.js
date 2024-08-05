import ClassRoom from './0-classroom';

/**
 * Initializes and returns an array of classroom instances.
 *
 * @returns {ClassRoom[]} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  const room = new ClassRoom(19);
  const room1 = new ClassRoom(20);
  const room2 = new ClassRoom(34);
  return [room, room1, room2];
}
