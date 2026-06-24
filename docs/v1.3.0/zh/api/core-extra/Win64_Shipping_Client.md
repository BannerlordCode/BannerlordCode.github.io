<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Win64_Shipping_Client`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Win64_Shipping_Client

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Win64_Shipping_Client`
**Base:** 无
**File:** `TaleWorlds.Library/VirtualFolders.cs`

## 概述

`Win64_Shipping_Client` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 使用示例

```csharp
var example = new Win64_Shipping_Client();
```

## 参见

- [完整类目录](../catalog)