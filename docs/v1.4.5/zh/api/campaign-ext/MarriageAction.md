<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarriageAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageAction

## 心智模型

先把 `MarriageAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

MarriageAction 是一组静态方法，用于在战役中以特定原因触发"Marriage"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

**用途 / Purpose:** 执行此入口。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
MarriageAction.Apply(firstHero, secondHero, false);
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)