import {ref} from 'vue';

export default async url => {
  const response = ref();

  const request = async () => {
    const result = await fetch(url).then(r => r.json());
    response.value = result;
  };

  return {response, request};
}