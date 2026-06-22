<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultInformationRestrictionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultInformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInformationRestrictionModel : InformationRestrictionModel`
**Base:** `InformationRestrictionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInformationRestrictionModel.cs`

## 概述

`DefaultInformationRestrictionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel())` 注册，以改变其计算逻辑。

## 主要方法

### DoesPlayerKnowDetailsOf
```csharp
public override bool DoesPlayerKnowDetailsOf(Settlement settlement)
```

### DoesPlayerKnowDetailsOf
```csharp
public override bool DoesPlayerKnowDetailsOf(Hero hero)
```

## 使用示例

```csharp
// DefaultInformationRestrictionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel());
```

## 参见

- [完整类目录](../catalog)