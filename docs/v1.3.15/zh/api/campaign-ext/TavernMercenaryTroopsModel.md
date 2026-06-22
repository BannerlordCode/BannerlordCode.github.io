<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TavernMercenaryTroopsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TavernMercenaryTroopsModel : MBGameModel<TavernMercenaryTroopsModel>`
**Base:** `MBGameModel<TavernMercenaryTroopsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TavernMercenaryTroopsModel.cs`

## 概述

`TavernMercenaryTroopsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TavernMercenaryTroopsModel>(new MyTavernMercenaryTroopsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public abstract float RegularMercenariesSpawnChance { get; }` |

## 使用示例

```csharp
// TavernMercenaryTroopsModel (Model) 的典型用法
Game.Current.ReplaceModel<TavernMercenaryTroopsModel>(new MyTavernMercenaryTroopsModel());
```

## 参见

- [完整类目录](../catalog)