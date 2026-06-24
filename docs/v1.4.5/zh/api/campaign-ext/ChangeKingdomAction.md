<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChangeKingdomAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeKingdomAction

## 心智模型

先把 `ChangeKingdomAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

ChangeKingdomAction 是一组静态方法，用于在战役中以特定原因触发"ChangeKingdom"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByJoinToKingdom

```csharp
public static void ApplyByJoinToKingdom(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**用途 / Purpose:** join to kingdom。

### ApplyByJoinToKingdomByDefection

```csharp
public static void ApplyByJoinToKingdomByDefection(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), bool showNotification = true)
```

**用途 / Purpose:** join to kingdom by defection。

### ApplyByCreateKingdom

```csharp
public static void ApplyByCreateKingdom(Clan clan, Kingdom newKingdom, bool showNotification = true)
```

**用途 / Purpose:** create kingdom。

### ApplyByLeaveByKingdomDestruction

```csharp
public static void ApplyByLeaveByKingdomDestruction(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** leave by kingdom destruction。

### ApplyByLeaveKingdom

```csharp
public static void ApplyByLeaveKingdom(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** leave kingdom。

### ApplyByLeaveWithRebellionAgainstKingdom

```csharp
public static void ApplyByLeaveWithRebellionAgainstKingdom(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** leave with rebellion against kingdom。

### ApplyByJoinFactionAsMercenary

```csharp
public static void ApplyByJoinFactionAsMercenary(Clan clan, Kingdom newKingdom, CampaignTime shouldStayInKingdomUntil = default(CampaignTime), int awardMultiplier = 50, bool showNotification = true)
```

**用途 / Purpose:** join faction as mercenary。

### ApplyByLeaveKingdomAsMercenary

```csharp
public static void ApplyByLeaveKingdomAsMercenary(Clan mercenaryClan, bool showNotification = true)
```

**用途 / Purpose:** leave kingdom as mercenary。

### ApplyByLeaveKingdomByClanDestruction

```csharp
public static void ApplyByLeaveKingdomByClanDestruction(Clan clan, bool showNotification = true)
```

**用途 / Purpose:** leave kingdom by clan destruction。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
ChangeKingdomAction.ApplyByJoinToKingdom(clan, newKingdom, default(CampaignTime), false);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)