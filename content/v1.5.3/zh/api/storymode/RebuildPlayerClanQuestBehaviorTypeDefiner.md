---
title: "RebuildPlayerClanQuestBehaviorTypeDefiner"
description: "存档类型定义器：全局 id 4140000，同时注册 RescueFamilyQuest（id 1）与它的七态状态枚举（id 11）。"
---
# RebuildPlayerClanQuestBehaviorTypeDefiner

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode
**Type:** `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** SaveableTypeDefiner
**Source:** PlayerClanQuests/RescueFamilyQuestBehavior.cs

## 概述

玩家氏族阶段（教程之后、主线收尾）的存档类型注册表。它是四个剧情 definer 里**唯一同时定义了类和枚举**的：`RescueFamilyQuest` 注册为类 id 1，它内部的七态状态机 `RescueFamilyQuestStateEnum` 注册为枚举 id 11。全局编号 `4140000` 是所有剧情 definer 里最大的一个。

## 心智模型

Bannerlord 的存档不是反射式序列化，而是数字映射表。每个模块声明一组 `SaveableTypeDefiner`，引擎反射构造它们，从构造参数读全局 id、从 `DefineClassTypes()` 读类内 id、从 `DefineEnumTypes()` 读枚举 id。存档文件写的是数字，读档时靠这张表找回 CLR 类型，再调用类型自动生成的成员访问器。

**枚举需要单独注册**这一点是本类存在的核心理由。`RescueFamilyQuestStateEnum` 是私有嵌套枚举，但它的值要通过 `[SaveableField(8)]` 持久化——序列化系统在写一个枚举字段时需要在类型表里查到它的类型编号，否则只能退化成整数写回（那样读档时枚举语义就丢了）。`DefineEnumTypes()` 就是补上这一环。

坑：这个类被声明在 `RescueFamilyQuestBehavior.cs` 的**文件末尾、嵌套在 `RescueFamilyQuest` 类内部**（源码里的缩进会误导），但它的 namespace 是 `StoryMode.Quests.PlayerClanQuests`、名字却叫 `RebuildPlayerClanQuestBehaviorTypeDefiner`——名字里的 "RebuildPlayerClan" 指的是**前置任务**，不是它自己注册的类型。任何按文件名猜内容的工具都会在这里出错。

## 怎么用

### 怎么拿到它

`public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner` 声明在 `bannerlord-1.5.3/StoryMode/Quests/PlayerClanQuests/RescueFamilyQuestBehavior.cs:971`——**它在 1013 行的 `RescueFamilyQuestBehavior.cs` 末尾，不在 `RebuildPlayerClanQuest.cs` 里**（页面头部的 `**Source:**` 字段写的正是这个文件，所以字段本身是对的，需要注意的是「同文件里还有另外三个类型」）。

**引擎自动实例化，别 new。** 唯一构造函数 `RebuildPlayerClanQuestBehaviorTypeDefiner()`（无参）只调 `: base(4140000)`——**`4140000` 是全模块五个存档定义器里最大的 id 段基数**（对比：`DefeatTheConspiracyQuestBehaviorTypeDefiner` = `16000`、`AssembleEmpireQuestBehaviorTypeDefiner` = `1002000`、`WeakenEmpireQuestBehaviorTypeDefiner` = `1005000`、模块级 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) = `320000`）。

`protected override void DefineClassTypes()` 调基类实现后 `AddClassDefinition` 登记同文件里的嵌套任务类。

同文件里一共四个类型，引用时注意完整名：

| 类型 | 声明行 |
| --- | --- |
| `RescueFamilyQuestBehavior` | `:30` |
| `RescueFamilyQuest`（嵌套） | `:122` |
| `RebuildPlayerClanQuestBehaviorTypeDefiner`（本页） | `:971` |
| `OppositionData` / 其它嵌套 | 文件内 |

### 典型用法

```csharp
// 不要 new。只用于确认存档事实：
SaveableTypeDefiner definer = new StoryMode.Quests.PlayerClanQuests.RebuildPlayerClanQuestBehaviorTypeDefiner();
Debug.Print("存档 id 基数=" + definer.Id + "（4140000，全模块最大的一段）");

// 反例：改动嵌套任务类的成员而不动 DefineClassTypes
// -> 编译通过、存档可写、读档静默丢字段
```

### 最容易踩的坑

id 段的**数量级**和别的不在同一档：其余定义器都在百万以下（`16000` / `320000` / `1002000` / `1005000`），而这一段是 `4140000`。如果你自己写 `SaveableTypeDefiner` 挑基数时凭感觉选了 `4000000`–`4200000`，会和它撞段——存档 id 必须全局唯一，撞了的后果是存档读出错误的类型或直接抛异常，而不是像重复标签那样只影响一个玩法点。

## 主要成员

- `RebuildPlayerClanQuestBehaviorTypeDefiner()`：无参构造，`base(4140000)` 声明全局 id。
- `protected override void DefineClassTypes()`：`AddClassDefinition(typeof(RescueFamilyQuestBehavior.RescueFamilyQuest), 1, null)`。
- `protected override void DefineEnumTypes()`：`AddEnumDefinition(typeof(RescueFamilyQuestBehavior.RescueFamilyQuest.RescueFamilyQuestStateEnum), 11, null)`。

## 使用示例

```csharp
// 玩家氏族阶段的存档注册：类 + 枚举双注册
public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner
{
    public RebuildPlayerClanQuestBehaviorTypeDefiner() : base(4140000) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(RescueFamilyQuestBehavior.RescueFamilyQuest), 1, null);
    }

    protected override void DefineEnumTypes()
    {
        base.AddEnumDefinition(
            typeof(RescueFamilyQuestBehavior.RescueFamilyQuest.RescueFamilyQuestStateEnum), 11, null);
    }
}
```

## 风险与边界

`4140000` / `1` / `11` 三个数字都是公开的存档 ABI 契约，改动会让旧存档直接加载失败。枚举 id 用 **11** 而不是 1，说明该 definer 曾注册过其它类型（10 号位已被历史版本占用），这正是"不要复用小 id"的实例证据。删除这个类会让 `RescueFamilyQuest` 及其状态枚举都无法持久化——旧存档在读到该类型时直接报错。类内嵌套私有枚举能被反射拿到（`typeof` 对嵌套类型不要求可见性），所以"private 不是障碍"。作为 mod 实践：新增枚举类型时如果忘了 override `DefineEnumTypes`，编译能过、运行时才炸，属于最难排查的一类错误。

## 依赖关系

- [RescueFamilyQuestBehavior（源码宿主文件）](../RescueFamilyQuestBehavior)
- [RescueFamilyQuest（被注册的任务类型）](../RescueFamilyQuest)
- [RebuildPlayerClanQuest（名字所指的前置任务）](../RebuildPlayerClanQuest)
- [DefeatTheConspiracyQuestBehaviorTypeDefiner（另一处含多类型注册的示例）](../DefeatTheConspiracyQuestBehaviorTypeDefiner)
- [SaveableTypeDefiner（基类机制）](../../save-system/SaveableTypeDefiner)