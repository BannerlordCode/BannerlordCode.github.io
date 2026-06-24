<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DCSHelperMapItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DCSHelperMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DCSHelperMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/DCSHelperMapItemVM.cs`

## 概述

`DCSHelperMapItemVM` 位于 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ExistsLocally` | `public bool ExistsLocally { get; set; }` |
| `IsCautionSpriteVisible` | `public bool IsCautionSpriteVisible { get; set; }` |
| `CurrentlyPlaying` | `public bool CurrentlyPlaying { get; set; }` |
| `CurrentlyPlayingText` | `public string CurrentlyPlayingText { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `MapPathClean` | `public string MapPathClean { get; set; }` |
| `LocalMapHint` | `public BasicTooltipViewModel LocalMapHint { get; set; }` |

## 主要方法

### ExecuteToggleSelection
`public void ExecuteToggleSelection()`

**用途 / Purpose:** 执行 `toggle selection` 操作或流程。

### RefreshLocalMapData
`public void RefreshLocalMapData()`

**用途 / Purpose:** 刷新 `local map data` 的显示或缓存。

## 使用示例

```csharp
var value = new DCSHelperMapItemVM();
value.ExecuteToggleSelection();
```

## 参见

- [完整类目录](../catalog)