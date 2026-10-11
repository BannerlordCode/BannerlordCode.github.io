---
title: "AmbRefPositive"
description: "夹具页（正向）：带完整路径与真实行号的引用，用来证明修后的判分器能用路径消歧并核到真实行内容。"
---
# AmbRefPositive

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class`
**源文件：** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

## 概述

这一页是「重名 .cs 引用」修复线的正向对照。它故意选了一个在 v1.4.6 源码树里重名的文件名：`LoadContext.cs` 在 `TaleWorlds.SaveSystem/Load/` 与 `mscorlib/System/Reflection/` 下各有一个，所以任何只看 basename 的解析器都会把它判成 ambiguous 并静默跳过，既不做边界检查，也不核对行内容。本页的每一条引用都写成「目录/文件.cs:行号」的完整形态，而且行号指向真实存在的行；修后的判分器应当据此消歧、核界、核对行内容，从而输出 PASS，并且 `J13=0`、`ambiguous=0`。整页除了 J3 的引用计数之外不携带任何其它信号，所以它同时是「修后不会把正确引用误杀」的对照，用来证明修复不是「一律报错」。

## 心智模型

把 `LoadContext` 想成反序列化流水线里的「命名空间解析器」：它持有一次加载的 `LoadData`，把存档里写下的类型名解析成运行时 `Type`，再按 `ObjectId` 把一个个对象头挂到内存对象上。理解它的关键有三条。第一，它是**有状态的单次加载上下文**，不是可复用的全局服务，一次 `Load` 结束之后就作废。第二，它的所有成员都围绕「名字到类型」「id 到对象」这两张表工作，所以读代码时先去找这两张表，再看谁填充它们、谁查询它们。第三，`LoadContext` 这个名字在整棵树里**不是唯一的**，引用它时必须连目录一起说清楚，否则读者和工具都无法确定你说的是哪一个 `LoadContext`。这三条合起来正好解释了为什么本页的引用一律带路径：路径不是装饰，它是消歧所需的唯一信息。

## 怎么用

### 怎么拿到

反序列化时由存档加载流程在加载阶段创建，调用方不需要自己 new；一次加载结束后引用即失效，不要把它缓存到别的对象里长期持有。

### 典型用法

先让框架创建上下文并调用 `Load`，再用 `GetObjectWithId` 按 id 取回已经反序列化的对象头，最后交给上层逻辑做 late initialize。

### 坑

`EnableLoadStatistics` 是静态开关，影响的是下一次加载的统计输出；在加载中途改它不会有即时效果。另外，同一棵树里还有 `System.Reflection.LoadContext`，写引用时不要漏掉 `TaleWorlds.SaveSystem/Load/` 这一段路径，否则读者分不清你说的是哪一个。

## 关键成员

- `public class LoadContext`（`TaleWorlds.SaveSystem/Load/LoadContext.cs:11`）— 类型声明本身，代表一次加载的上下文。
- `public static bool EnableLoadStatistics`（`TaleWorlds.SaveSystem/Load/LoadContext.cs:15`）— 静态开关，控制是否收集加载统计。
- `return false;`（`TaleWorlds.SaveSystem/Load/LoadContext.cs:19`）— 方法体内的一条语句，证明行内语句引用也应当被核到内容。
- `public bool Load(LoadData loadData, bool loadAsLateInitialize)`（`TaleWorlds.SaveSystem/Load/LoadContext.cs:64`）— 加载主入口，驱动整条反序列化流水线。
- `public ObjectHeaderLoadData GetObjectWithId(int id)`（`TaleWorlds.SaveSystem/Load/LoadContext.cs:308`）— 按 id 取回对象头，是加载期的主要查询入口。

## 真实示例

```csharp
public static void DumpLoadedObject(LoadContext context, int objectId)
{
    if (!LoadContext.EnableLoadStatistics)
    {
        return;
    }
    ObjectHeaderLoadData header = context.GetObjectWithId(objectId);
    InformationManager.DisplayMessage(new InformationMessage(header.ToString()));
}
```

## 参见

- [AmbRefNegative](../AmbRefNegative)
- [AmbRefFailClosed](../AmbRefFailClosed)

## 导航

- [save-system 桶索引](../)
