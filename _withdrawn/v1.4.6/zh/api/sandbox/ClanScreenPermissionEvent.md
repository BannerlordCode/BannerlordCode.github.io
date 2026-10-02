---
title: "ClanScreenPermissionEvent"
description: "ClanScreenPermissionEvent：SandBox.View.Map.Navigation.NavigationElements 的 public 类，继承 EventBase；公开成员 2 个（方法 0、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanScreenPermissionEvent

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class ClanScreenPermissionEvent : EventBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ClanScreenPermissionEvent 位于 SandBox.View 模块，源文件 SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 ClanScreenPermissionEvent → EventBase。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanScreenPermissionEvent 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map.Navigation.NavigationElements`，继承链 ClanScreenPermissionEvent → EventBase。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextObject>IsClanScreenAvailable` | `public Action<bool, TextObject>IsClanScreenAvailable` | 属性 |
| `ClanScreenPermissionEvent` | `public ClanScreenPermissionEvent(Action<bool, TextObject>isClanScreenAvailable)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EventBase](../../core-extra/EventBase/)
- [同命名空间 CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement/)
- [同命名空间 ClanNavigationElement](../ClanNavigationElement/)
- [同命名空间 EscapeMenuNavigationElement](../EscapeMenuNavigationElement/)
- [同命名空间 InventoryNavigationElement](../InventoryNavigationElement/)
