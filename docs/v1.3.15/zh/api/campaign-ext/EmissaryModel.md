<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmissaryModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EmissaryModel.cs`

## 概述

`EmissaryModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<EmissaryModel>(new MyEmissaryModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## 主要方法

### IsEmissary
```csharp
public abstract bool IsEmissary(Hero hero)
```

## 使用示例

```csharp
// EmissaryModel (Model) 的典型用法
Game.Current.ReplaceModel<EmissaryModel>(new MyEmissaryModel());
```

## 参见

- [完整类目录](../catalog)