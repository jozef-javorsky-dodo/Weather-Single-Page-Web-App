<script lang="ts">

  import { errorMessage } from '../store';

</script>

{#if $errorMessage}

    <div class="p-4 mb-6 text-center text-white rounded-lg bg-error-primary">

        {$errorMessage}

    </div>

{/if}
