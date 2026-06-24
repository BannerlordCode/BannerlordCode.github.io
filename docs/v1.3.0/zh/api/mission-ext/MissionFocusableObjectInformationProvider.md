<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionFocusableObjectInformationProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFocusableObjectInformationProvider

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFocusableObjectInformationProvider`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs`

## 概述

`MissionFocusableObjectInformationProvider` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### AddInfoCallback
`public void AddInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**用途 / Purpose:** 向当前集合/状态中添加 `info callback`。

### RemoveInfoCallback
`public void RemoveInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)`

**用途 / Purpose:** 从当前集合/状态中移除 `info callback`。

### GetInteractionTexts
`public void GetInteractionTexts(Agent requesterAgent, IFocusable focusable, bool isInteractable, out FocusableObjectInformation focusableObjectInformation)`

**用途 / Purpose:** 获取 `interaction texts` 的当前值。

## 使用示例

```csharp
var value = new MissionFocusableObjectInformationProvider();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)