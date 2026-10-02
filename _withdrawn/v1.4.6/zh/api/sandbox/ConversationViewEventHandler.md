---
title: "ConversationViewEventHandler"
description: "ConversationViewEventHandler：SandBox.View.Conversation 的 public 类，继承 Attribute；公开成员 5 个（方法 0、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Conversation/ConversationViewEventHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationViewEventHandler

**Namespace:** `SandBox.View.Conversation`
**Module:** `SandBox.View`
**Type:** `public class ConversationViewEventHandler : Attribute`
**File:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ConversationViewEventHandler 位于 SandBox.View 模块，源文件 SandBox.View/Conversation/ConversationViewEventHandler.cs。它是一个 public 类，实现/继承 Attribute，继承链为 ConversationViewEventHandler → Attribute。public/protected 成员共 5 个：3 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationViewEventHandler 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Conversation`，继承链 ConversationViewEventHandler → Attribute。成员构成以属性为主（属性 3/5，方法 0/5），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Conversation/ConversationViewEventHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | 属性 |
| `Type` | `public ConversationViewEventHandler.EventType Type` | 属性 |
| `ConversationViewEventHandler` | `public ConversationViewEventHandler(string id, ConversationViewEventHandler.EventType type)` | 构造函数 |
| `EventType` | `public enum EventType` | 属性 |
| `EventType` | `public enum EventType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ConversationViewEventHandlerDelegate](../ConversationViewEventHandlerDelegate/)
- [同命名空间 ConversationViewManager](../ConversationViewManager/)
