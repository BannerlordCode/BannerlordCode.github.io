<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeConfig`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeConfig

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public static class NativeConfig`
**领域:** engine

## 概述

`NativeConfig` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CheatMode` | `public static bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode { get; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; }` |
| `GetUIDebugMode` | `public static bool GetUIDebugMode { get; }` |
| `DisableSound` | `public static bool DisableSound { get; }` |
| `EnableEditMode` | `public static bool EnableEditMode { get; }` |
| `TableauCacheEnabled` | `public static bool TableauCacheEnabled { get; }` |
| `DoLocalizationCheckAtStartup` | `public static bool DoLocalizationCheckAtStartup { get; }` |
| `EnableClothSimulation` | `public static bool EnableClothSimulation { get; }` |
| `CharacterDetail` | `public static int CharacterDetail { get; }` |
| `InvertMouse` | `public static bool InvertMouse { get; }` |
| `LastOpenedScene` | `public static string LastOpenedScene { get; }` |
| `AutoSaveInMinutes` | `public static int AutoSaveInMinutes { get; }` |
| `GetUIDoNotUseGeneratedPrefabs` | `public static bool GetUIDoNotUseGeneratedPrefabs { get; }` |
| `DebugLoginUsername` | `public static string DebugLoginUsername { get; }` |
| `DebugLogicPassword` | `public static string DebugLogicPassword { get; }` |
| `DisableGuiMessages` | `public static bool DisableGuiMessages { get; }` |
| `AutoGFXQuality` | `public static NativeOptions.ConfigQuality AutoGFXQuality { get; }` |

## 主要方法

### OnConfigChanged
`public static void OnConfigChanged()`

**用途 / Purpose:** 当 `config changed` 事件触发时调用此方法。

### SetAutoConfigWrtHardware
`public static void SetAutoConfigWrtHardware()`

**用途 / Purpose:** 设置 `auto config wrt hardware` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
NativeConfig.OnConfigChanged();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
