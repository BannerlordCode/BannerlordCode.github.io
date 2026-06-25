---
title: "EngineRenderDisplayMode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineRenderDisplayMode`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineRenderDisplayMode

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum EngineRenderDisplayMode`
**Area:** engine

## Overview

`EngineRenderDisplayMode` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ShowNone` |
| `ShowAlbedo` |
| `ShowNormals` |
| `ShowVertexNormals` |
| `ShowSpecular` |
| `ShowGloss` |
| `ShowOcclusion` |
| `ShowGbufferShadowMask` |
| `ShowTranslucency` |
| `ShowMotionVector` |
| `ShowVertexColor` |
| `ShowDepth` |
| `ShowTiledLightOverdraw` |
| `ShowTiledDecalOverdraw` |
| `ShowMeshId` |
| `ShowDisableSunLighting` |
| `ShowDebugTexture` |
| `ShowTextureDensity` |
| `ShowOverdraw` |
| `ShowVsComplexity` |
| `ShowPsComplexity` |
| `ShowDisableAmbientLighting` |
| `ShowEntityId` |
| `ShowPrtDiffuseAmbient` |
| `ShowLightDebugMode` |
| `ShowParticleShadingAtlas` |
| `ShowTerrainAngle` |
| `ShowParallaxDebug` |
| `ShowAlbedoValidation` |

## Usage Example

```csharp
EngineRenderDisplayMode example = EngineRenderDisplayMode.ShowNone;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
