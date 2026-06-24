<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RundownLineVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RundownLineVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public class RundownLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownLineVM.cs`

## 概述

`RundownLineVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ValueAsString` | `public string ValueAsString { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## 使用示例

```csharp
var example = new RundownLineVM();
```

## 参见

- [完整类目录](../catalog)