<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LiftSiegeAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LiftSiegeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/LiftSiegeAction.cs`

LiftSiegeAction 是一组静态方法，用于在战役中以特定原因触发"LiftSiege"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### GetGameAction

```csharp
public static void GetGameAction(MobileParty side1Party)
```

**用途 / Purpose:** get game action。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
LiftSiegeAction.GetGameAction(side1Party);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)