<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMenuOverlayModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMenuOverlayModel : MBGameModel<SettlementMenuOverlayModel>`
**Base:** `MBGameModel<SettlementMenuOverlayModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMenuOverlayModel.cs`

## 概述

`SettlementMenuOverlayModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementMenuOverlayModel>(new MySettlementMenuOverlayModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetOverlayHeroes
```csharp
public abstract Dictionary<Hero, bool> GetOverlayHeroes()
```

## 使用示例

```csharp
// SettlementMenuOverlayModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementMenuOverlayModel>(new MySettlementMenuOverlayModel());
```

## 参见

- [完整类目录](../catalog)