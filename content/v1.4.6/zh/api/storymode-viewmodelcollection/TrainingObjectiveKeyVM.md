---
title: "TrainingObjectiveKeyVM"
description: "TrainingObjectiveKeyVM：StoryMode.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 21 个（方法 0、属性 12、字段 0）。源文件 StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs。"
---
# TrainingObjectiveKeyVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs`

## 概述

TrainingObjectiveKeyVM 位于 StoryMode.ViewModelCollection 模块，源文件 StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TrainingObjectiveKeyVM → ViewModel。public/protected 成员共 21 个：12 属性、3 构造函数、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TrainingObjectiveKeyVM 是 StoryMode.ViewModelCollection 的顶层类型，命名空间与模块目录不同（StoryMode.ViewModelCollection.Missions），继承链 TrainingObjectiveKeyVM → ViewModel。成员构成以属性为主（属性 12/21，方法 0/21），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.MouseAndClickInput mouseAndClickInput)` | 构造函数 |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.ControllerStickInput controllerStickInput)` | 构造函数 |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.KeyInput keyInput)` | 构造函数 |
| `Key` | `public InputKeyItemVM Key` | 属性 |
| `ForcedKeyId` | `public string ForcedKeyId` | 属性 |
| `ForcedKeyName` | `public string ForcedKeyName` | 属性 |
| `MovementType` | `public int MovementType` | 属性 |
| `MouseClick` | `public int MouseClick` | 属性 |
| `InputType` | `public int InputType` | 属性 |
| `MovementTypes` | `public enum MovementTypes` | 属性 |
| `InputTypes` | `public enum InputTypes` | 属性 |
| `MouseAndClickInput` | `public struct MouseAndClickInput` | 属性 |
| `KeyInput` | `public struct KeyInput` | 属性 |
| `ControllerStickInput` | `public struct ControllerStickInput` | 属性 |
| `MouseClickTypes` | `public enum MouseClickTypes` | 属性 |
| `MovementTypes` | `public enum MovementTypes` | 嵌套类型 |
| `InputTypes` | `public enum InputTypes` | 嵌套类型 |
| `MouseAndClickInput` | `public struct MouseAndClickInput` | 嵌套类型 |
| `KeyInput` | `public struct KeyInput` | 嵌套类型 |
| `ControllerStickInput` | `public struct ControllerStickInput` | 嵌套类型 |
| `MouseClickTypes` | `public enum MouseClickTypes` | 嵌套类型 |

## 参见

- [↑ storymode-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TrainingFieldObjectiveItemVM](../TrainingFieldObjectiveItemVM)
- [同命名空间 TrainingFieldObjectivesVM](../TrainingFieldObjectivesVM)
