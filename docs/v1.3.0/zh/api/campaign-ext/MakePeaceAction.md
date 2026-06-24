<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MakePeaceAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MakePeaceAction

## 心智模型

先把 `MakePeaceAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

MakePeaceAction 是一组静态方法，用于在战役中以特定原因触发"MakePeace"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyPardonPlayer

```csharp
public static void ApplyPardonPlayer(IFaction faction)
```

**用途 / Purpose:** pardon player。

### Apply

```csharp
public static void Apply(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2 = 0)
```

**用途 / Purpose:** 执行此入口。

### ApplyByKingdomDecision

```csharp
public static void ApplyByKingdomDecision(IFaction faction1, IFaction faction2, int dailyTributeFrom1To2 = 0)
```

**用途 / Purpose:** kingdom decision。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
MakePeaceAction.ApplyPardonPlayer(faction);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)