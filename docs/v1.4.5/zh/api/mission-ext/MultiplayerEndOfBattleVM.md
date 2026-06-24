<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerEndOfBattleVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerEndOfBattleVM.cs`

## 概述

`MultiplayerEndOfBattleVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasFirstPlace` | `public bool HasFirstPlace { get; set; }` |
| `HasSecondPlace` | `public bool HasSecondPlace { get; set; }` |
| `HasThirdPlace` | `public bool HasThirdPlace { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `FirstPlacePlayer` | `public MPEndOfBattlePlayerVM FirstPlacePlayer { get; set; }` |
| `SecondPlacePlayer` | `public MPEndOfBattlePlayerVM SecondPlacePlayer { get; set; }` |
| `ThirdPlacePlayer` | `public MPEndOfBattlePlayerVM ThirdPlacePlayer { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnBattleEnded
`public void OnBattleEnded()`

**用途 / Purpose:** 当 `battle ended` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MultiplayerEndOfBattleVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)