<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCharacterStatsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## 概述

`DefaultCharacterStatsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## 主要方法

### WoundedHitPointLimit
```csharp
public override int WoundedHitPointLimit(Hero hero)
```

### GetTier
```csharp
public override int GetTier(CharacterObject character)
```

### MaxHitpoints
```csharp
public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)
```

## 使用示例

```csharp
// DefaultCharacterStatsModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel());
```

## 参见

- [完整类目录](../catalog)