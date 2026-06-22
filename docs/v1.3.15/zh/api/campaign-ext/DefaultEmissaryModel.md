<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEmissaryModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## 概述

`DefaultEmissaryModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
```csharp
public override bool IsEmissary(Hero hero)
```

## 使用示例

```csharp
// DefaultEmissaryModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel());
```

## 参见

- [完整类目录](../catalog)