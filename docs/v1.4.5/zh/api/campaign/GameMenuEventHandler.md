<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuEventHandler`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuEventHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuEventHandler : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuEventHandler.cs`

## 概述

`GameMenuEventHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GameMenuEventHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |
| `MenuOptionId` | `public string MenuOptionId { get; }` |
| `Type` | `public EventType Type { get; }` |

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new GameMenuEventHandler());
```

## 参见

- [完整类目录](../catalog)