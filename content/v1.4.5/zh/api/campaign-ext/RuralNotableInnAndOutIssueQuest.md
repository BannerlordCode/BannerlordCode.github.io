---
title: "RuralNotableInnAndOutIssueQuest"
description: "RuralNotableInnAndOutIssueQuest 的自动生成类参考。"
---
# RuralNotableInnAndOutIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RuralNotableInnAndOutIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RuralNotableInnAndOutIssueBehavior.cs`

## 概述

`RuralNotableInnAndOutIssueQuest` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsLocationTrackedByQuest
`public override IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**用途 / Purpose:** 判断当前对象是否处于 「location tracked by quest」 状态或条件。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueQuest 实例
RuralNotableInnAndOutIssueQuest ruralNotableInnAndOutIssueQuest = ...;
var result = ruralNotableInnAndOutIssueQuest.IsLocationTrackedByQuest(location);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RuralNotableInnAndOutIssueQuest ruralNotableInnAndOutIssueQuest = ...;
ruralNotableInnAndOutIssueQuest.IsLocationTrackedByQuest(location);
```

## 参见

- [本区域目录](../)