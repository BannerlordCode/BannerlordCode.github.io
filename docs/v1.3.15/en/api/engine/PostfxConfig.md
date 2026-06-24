<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PostfxConfig`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PostfxConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum PostfxConfig : uint`
**Base:** `uint`
**Area:** engine

## Overview

`PostfxConfig` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `pfx_config_bloom` |
| `1U` |
| `pfx_config_sunshafts` |
| `pfx_config_motionblur` |
| `4U` |
| `pfx_config_dof` |
| `8U` |
| `pfx_config_tsao` |
| `16U` |
| `pfx_config_fxaa` |
| `64U` |
| `pfx_config_smaa` |
| `128U` |
| `pfx_config_temporal_smaa` |
| `256U` |
| `pfx_config_temporal_resolve` |
| `512U` |
| `pfx_config_temporal_filter` |
| `1024U` |
| `pfx_config_contour` |
| `2048U` |
| `pfx_config_ssr` |
| `4096U` |
| `pfx_config_sssss` |
| `8192U` |
| `pfx_config_streaks` |
| `16384U` |
| `pfx_config_lens_flares` |
| `32768U` |
| `pfx_config_chromatic_aberration` |

## Usage Example

```csharp
PostfxConfig example = PostfxConfig.pfx_config_bloom;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
