<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InformationRestrictionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**Base:** `MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## 概述

`InformationRestrictionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<InformationRestrictionModel>(new MyInformationRestrictionModel())` 注册，以改变其计算逻辑。

## 主要方法

### DoesPlayerKnowDetailsOf
```csharp
public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement)
```

### DoesPlayerKnowDetailsOf
```csharp
public abstract bool DoesPlayerKnowDetailsOf(Hero hero)
```

## 使用示例

```csharp
// InformationRestrictionModel (Model) 的典型用法
Game.Current.ReplaceModel<InformationRestrictionModel>(new MyInformationRestrictionModel());
```

## 参见

- [完整类目录](../catalog)