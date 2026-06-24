<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerEndOfRoundSideVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfRoundSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundSideVM.cs`

## 概述

`MultiplayerEndOfRoundSideVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsWinner` | `public bool IsWinner { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureName` | `public string CultureName { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## 主要方法

### SetData
`public void SetData(BasicCultureObject culture, int score, bool isWinner, MultiplayerCultureColorInfo cultureColors)`

**用途 / Purpose:** 设置 `data` 的值或状态。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new MultiplayerEndOfRoundSideVM();
value.SetData(culture, 0, false, cultureColors);
```

## 参见

- [完整类目录](../catalog)