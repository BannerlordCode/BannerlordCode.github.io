---
title: "DefeatTheConspiracyQuestBehaviorTypeDefiner"
description: "第三阶段存档类型定义器：全局 id 16000，同时注册 OppositionData（id 1）与 DefeatTheConspiracyQuest（id 2）。"
---
# DefeatTheConspiracyQuestBehaviorTypeDefiner

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode
**Type:** `public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** SaveableTypeDefiner
**Source:** ThirdPhase/DefeatTheConspiracyQuestBehavior.cs

## 概述

第三阶段的存档类型注册表。它与其他 definer 的显著区别是**一次注册两个类型**：`OppositionData`（每个敌对王国的战况数据容器）和 `DefeatTheConspiracyQuest`（战争进度任务）。全局编号是 `16000`，类内编号分别是 1 和 2。

## 心智模型

Bannerlord 的存档类型系统是手写的显式注册表：每个模块在 `MBSubModuleBase.SaveableTypes` 属性里列出一组 `SaveableTypeDefiner` 子类；引擎在启动时反射构造它们，读出构造参数里的全局 id 与 `DefineClassTypes()` 里的类内 id，构成一张"数字 → CLR 类型"的表。存档文件只写数字，读档时按表还原对象。

值得注意的是**编号 16000 是整个存档表里最小的一批号**——第二阶段用了 1002000 / 1005000，教程后的氏族重建用了 4140000。第三阶段之所以用小号，是因为它是原版最早写的那批代码。它也说明号段不是按语义分区的，**不能靠编号大小推断优先级或版本新旧**。

## 怎么用

### 怎么拿到它

`public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner` 声明在 `bannerlord-1.5.3/StoryMode/Quests/ThirdPhase/DefeatTheConspiracyQuestBehavior.cs:469`——**它与被它登记的两个类型在同一个 947 行文件里**。全文 947 行，但这个类型本身只有两样东西。

**引擎自动实例化，别 new。** 唯一构造函数 `DefeatTheConspiracyQuestBehaviorTypeDefiner()`（`:471`，无参）只做 `: base(16000)`（`:473`）——`16000` 是这个 id 段的基数，**是全模块五个存档定义器里最小的**（对比：`AssembleEmpireQuestBehaviorTypeDefiner` = `1002000`、`WeakenEmpireQuestBehaviorTypeDefiner` = `1005000`、`RebuildPlayerClanQuestBehaviorTypeDefiner` = `4140000`、模块级 `SaveableStoryModeTypeDefiner` = `320000`）。

`protected override void DefineClassTypes()`（`:478`）只有**两条** `AddClassDefinition`：

```csharp
base.AddClassDefinition(typeof(DefeatTheConspiracyQuestBehavior.OppositionData), 1, null);   // :480
base.AddClassDefinition(typeof(DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest), 2, null);  // :481
```

两条都是**嵌套类**，都用带外层类前缀的 `typeof(...)` 写法，编号 1 和 2 在 `16000` 段内。

被登记的 `DefeatTheConspiracyQuest`（`:486`）继承 `StoryModeQuestBase`，存档时由它把 `OppositionData` 一起带进 `collectedObjects`——**两个类型必须成对登记**，少登记 `OppositionData` 的话，读档时敌对王国数据会丢。

### 典型用法

```csharp
// 不要 new。只用于确认存档事实：

// 1) 确认两个被登记的嵌套类型
Debug.Print(typeof(StoryMode.Quests.ThirdPhase.DefeatTheConspiracyQuestBehavior.OppositionData).FullName + " -> id 1");
Debug.Print(typeof(StoryMode.Quests.ThirdPhase.DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest).FullName + " -> id 2");

// 2) 确认 id 段基数
SaveableTypeDefiner definer = new StoryMode.Quests.ThirdPhase.DefeatTheConspiracyQuestBehaviorTypeDefiner();
Debug.Print("存档 id 基数=" + definer.Id + "（16000，与 320000 / 1002000 / 1005000 / 4140000 是不同空间）");

// 3) 反例：给 OppositionData 加字段后不更新这里 -> 读档丢数据，编译与写入都正常
```

### 最容易踩的坑

它登记的两个都是**嵌套类**，源码里写的是带外层类前缀的 `typeof(...)`。你把 `DefeatTheConspiracyQuest` 挪到别的文件、或重命名外层行为类，这行就编译不过；而如果只是给 `OppositionData` 加成员而不动这里，**编译照过、存档照写、读档静默丢字段**。因为 `DefineClassTypes` 是 `protected override`，mod 无法从外部补登记——只能自己写 `SaveableTypeDefiner` 并避开已有 id 段，而本模块的 `16000` 段只用了 1 和 2，是最容易被误撞进去的区间。

## 主要成员

- `DefeatTheConspiracyQuestBehaviorTypeDefiner()`：无参构造，`base(16000)` 声明全局 id。
- `protected override void DefineClassTypes()`：连续两条 `AddClassDefinition`——先 `typeof(DefeatTheConspiracyQuestBehavior.OppositionData)` 注册为 id 1，再 `typeof(DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest)` 注册为 id 2。第三个参数 `null` 表示无泛型版本。

## 使用示例

```csharp
// 第三阶段存档注册：一个 definer 覆盖两个类型
public class DefeatTheConspiracyQuestBehaviorTypeDefiner : SaveableTypeDefiner
{
    public DefeatTheConspiracyQuestBehaviorTypeDefiner() : base(16000) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(DefeatTheConspiracyQuestBehavior.OppositionData), 1, null);
        base.AddClassDefinition(typeof(DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest), 2, null);
    }
}
```

## 风险与边界

两个数字（16000 / 1 / 2）都是公开的存档 ABI 契约，任何改动都会让旧存档直接报"未知类型"而加载失败——不会静默损坏，但会直接不可玩。它没有 override `DefineEnumTypes`，因为第三阶段没有需要持久化的枚举（`OppositionData` 用 `[SaveableField(10/20/30/40)]` 存的是 `float` / `JournalLog` / `CampaignTime`）。作为 mod 的实践参考：**如果你要给自己的内嵌类型做存档，不要复用 16000 号段**；整个表里还有大量未使用的空隙可用，但冲突时的错误信息极不直观，通常表现为某个类型被错误地映射成另一个。

## 依赖关系

- [DefeatTheConspiracyQuestBehavior（宿主）](../DefeatTheConspiracyQuestBehavior)
- [DefeatTheConspiracyQuest（被注册的任务类型）](../DefeatTheConspiracyQuest)
- [AssembleEmpireQuestBehaviorTypeDefiner（第二阶段的同类注册）](../AssembleEmpireQuestBehaviorTypeDefiner)
- [RebuildPlayerClanQuestBehaviorTypeDefiner（同时含类与枚举的注册示例）](../RebuildPlayerClanQuestBehaviorTypeDefiner)
- [SaveableTypeDefiner（基类机制）](../../save-system/SaveableTypeDefiner)