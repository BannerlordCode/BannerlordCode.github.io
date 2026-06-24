<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConspiracyQuestMapNotificationItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConspiracyQuestMapNotificationItemVM

**Namespace:** StoryMode.ViewModelCollection.Map
**Module:** StoryMode.ViewModelCollection
**Type:** `public class ConspiracyQuestMapNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Map/ConspiracyQuestMapNotificationItemVM.cs`

## 概述

`ConspiracyQuestMapNotificationItemVM` 位于 `StoryMode.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; }` |

## 使用示例

```csharp
var value = new ConspiracyQuestMapNotificationItemVM();
```

## 参见

- [完整类目录](../catalog)