
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestroyShipAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestroyShipAction

## 心智模型

先把 `DestroyShipAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

DestroyShipAction 是一组静态方法，用于在战役中以特定原因触发"DestroyShip"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Ship ship)
```

**用途 / Purpose:** 执行此入口。

### ApplyByDiscard

```csharp
public static void ApplyByDiscard(Ship ship)
```

**用途 / Purpose:** discard。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DestroyShipAction.Apply(ship);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)