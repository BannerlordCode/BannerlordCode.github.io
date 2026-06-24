<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EndMercenaryServiceAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EndMercenaryServiceAction

## 心智模型

先把 `EndMercenaryServiceAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

EndMercenaryServiceAction 是一组静态方法，用于在战役中以特定原因触发"EndMercenaryService"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### EndByDefault

```csharp
public static void EndByDefault(Clan clan)
```

**用途 / Purpose:** end by default。

### EndByLeavingKingdom

```csharp
public static void EndByLeavingKingdom(Clan clan)
```

**用途 / Purpose:** end by leaving kingdom。

### EndByBecomingVassal

```csharp
public static void EndByBecomingVassal(Clan clan)
```

**用途 / Purpose:** end by becoming vassal。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
EndMercenaryServiceAction.EndByDefault(clan);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)