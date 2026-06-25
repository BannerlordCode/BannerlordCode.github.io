---
title: "EngineRenderDisplayMode"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EngineRenderDisplayMode`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineRenderDisplayMode

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public enum EngineRenderDisplayMode`
**领域:** engine

## 概述

`EngineRenderDisplayMode` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

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

## 使用示例

```csharp
EngineRenderDisplayMode example = EngineRenderDisplayMode.ShowNone;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
