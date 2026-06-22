<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterStatsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**Base:** `MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## 概述

`CharacterStatsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CharacterStatsModel>(new MyCharacterStatsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public abstract int MaxCharacterTier { get; }` |

## 主要方法

### MaxHitpoints
```csharp
public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)
```

### GetTier
```csharp
public abstract int GetTier(CharacterObject character)
```

### WoundedHitPointLimit
```csharp
public abstract int WoundedHitPointLimit(Hero hero)
```

## 使用示例

```csharp
// CharacterStatsModel (Model) 的典型用法
Game.Current.ReplaceModel<CharacterStatsModel>(new MyCharacterStatsModel());
```

## 参见

- [完整类目录](../catalog)