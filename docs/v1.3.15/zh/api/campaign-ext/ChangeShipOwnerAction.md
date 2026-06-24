
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChangeShipOwnerAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeShipOwnerAction

## 心智模型

先把 `ChangeShipOwnerAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeShipOwnerAction.cs`

ChangeShipOwnerAction 是一组静态方法，用于在战役中以特定原因触发"ChangeShipOwner"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByTransferring

```csharp
public static void ApplyByTransferring(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** transferring。

### ApplyByTrade

```csharp
public static void ApplyByTrade(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** trade。

### ApplyByLooting

```csharp
public static void ApplyByLooting(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** looting。

### ApplyByProduction

```csharp
public static void ApplyByProduction(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** production。

### ApplyByMobilePartyCreation

```csharp
public static void ApplyByMobilePartyCreation(PartyBase newOwner, Ship ship)
```

**用途 / Purpose:** mobile party creation。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeShipOwnerAction.ApplyByTransferring(newOwner, ship);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)