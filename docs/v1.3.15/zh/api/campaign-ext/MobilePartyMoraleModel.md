<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## 概述

`MobilePartyMoraleModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MobilePartyMoraleModel>(new MyMobilePartyMoraleModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMoraleChange
```csharp
public abstract float CalculateMoraleChange(MobileParty party)
```

### GetMoraleTooltipText
```csharp
public abstract TextObject GetMoraleTooltipText(MobileParty party)
```

## 使用示例

```csharp
// MobilePartyMoraleModel (Model) 的典型用法
Game.Current.ReplaceModel<MobilePartyMoraleModel>(new MyMobilePartyMoraleModel());
```

## 参见

- [完整类目录](../catalog)