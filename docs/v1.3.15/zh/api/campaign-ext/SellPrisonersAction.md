<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SellPrisonersAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SellPrisonersAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SellPrisonersAction.cs`

SellPrisonersAction 是一组静态方法，用于在战役中以特定原因触发"SellPrisoners"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForAllPrisoners

```csharp
public static void ApplyForAllPrisoners(PartyBase sellerParty, PartyBase buyerParty)
```

**用途 / Purpose:** for all prisoners。

### ApplyForSelectedPrisoners

```csharp
public static void ApplyForSelectedPrisoners(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)
```

**用途 / Purpose:** for selected prisoners。

### ApplyByPartyScreen

```csharp
public static void ApplyByPartyScreen(TroopRoster prisoners)
```

**用途 / Purpose:** party screen。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SellPrisonersAction.ApplyForAllPrisoners(sellerParty, buyerParty);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)