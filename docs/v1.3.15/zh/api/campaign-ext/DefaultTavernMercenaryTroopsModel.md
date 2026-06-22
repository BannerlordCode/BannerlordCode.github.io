<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTavernMercenaryTroopsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTavernMercenaryTroopsModel : TavernMercenaryTroopsModel`
**Base:** `TavernMercenaryTroopsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTavernMercenaryTroopsModel.cs`

## 概述

`DefaultTavernMercenaryTroopsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultTavernMercenaryTroopsModel>(new MyDefaultTavernMercenaryTroopsModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public override float RegularMercenariesSpawnChance { get; }` |

## 使用示例

```csharp
// DefaultTavernMercenaryTroopsModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultTavernMercenaryTroopsModel>(new MyDefaultTavernMercenaryTroopsModel());
```

## 参见

- [完整类目录](../catalog)