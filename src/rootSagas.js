import exercisesSagas from './exercises/exercisesSagas';

export default function *() {
    yield* exercisesSagas()
}