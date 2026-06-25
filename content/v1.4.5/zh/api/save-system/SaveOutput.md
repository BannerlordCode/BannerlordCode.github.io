---
title: "SaveOutput"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveOutput`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SaveOutput

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveOutput`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/SaveOutput.cs`

## 概述

`SaveOutput` 位于 `TaleWorlds.SaveSystem.Save`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Save` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public GameData Data { get; }` |
| `Result` | `public SaveResult Result { get; }` |
| `Errors` | `public SaveError Errors { get; }` |
| `IsContinuing` | `public bool IsContinuing { get; }` |

## 主要方法

### PrintStatus
`public void PrintStatus()`

**用途 / Purpose:** 处理 `print status` 相关逻辑。

## 使用示例

```csharp
var value = new SaveOutput();
value.PrintStatus();
```

## 参见

- [完整类目录](../catalog)