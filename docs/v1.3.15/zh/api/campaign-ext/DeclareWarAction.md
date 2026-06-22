<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeclareWarAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeclareWarAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

DeclareWarAction 是一组静态方法，用于在战役中以特定原因触发"DeclareWar"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** kingdom decision。

### ApplyByDefault

```csharp
public static void ApplyByDefault(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** default。

### ApplyByPlayerHostility

```csharp
public static void ApplyByPlayerHostility(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** player hostility。

### ApplyByRebellion

```csharp
public static void ApplyByRebellion(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** rebellion。

### ApplyByCrimeRatingChange

```csharp
public static void ApplyByCrimeRatingChange(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** crime rating change。

### ApplyByKingdomCreation

```csharp
public static void ApplyByKingdomCreation(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** kingdom creation。

### ApplyByClaimOnThrone

```csharp
public static void ApplyByClaimOnThrone(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** claim on throne。

### ApplyByCallToWarAgreement

```csharp
public static void ApplyByCallToWarAgreement(IFaction faction1, IFaction faction2)
```

**用途 / Purpose:** call to war agreement。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DeclareWarAction.ApplyByKingdomDecision(faction1, faction2);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)