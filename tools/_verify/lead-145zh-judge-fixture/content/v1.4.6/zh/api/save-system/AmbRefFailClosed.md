---
title: "AmbRefFailClosed"
description: "夹具页（fail closed）：引用只写裸 basename、不带路径，用来证明修后无法消歧的引用必须报错而不是被静默跳过。"
---
# AmbRefFailClosed

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public class`
**源文件：** `TaleWorlds.SaveSystem/Load/LoadContext.cs`

## 概述

这一页是「重名 .cs 引用」修复线的 fail-closed 对照。它同样引用重名文件，但引用只写裸 basename：文件名叫 `LoadContext.cs`、行号是 19，没有 `TaleWorlds.SaveSystem/Load/` 这一段目录。修前的判分器对重名 basename 一律判 ambiguous 并静默跳过，于是这一页和正向页一样得到 PASS——两者看起来没有区别，这正是洞的所在。修后应当出现明确分叉：带路径的引用被消歧并核到真实行，因此正向页 PASS；不带路径的引用**无法消歧**，因此必须 fail closed，也就是报 `J3 ambiguous-citations=1` 而不是继续静默跳过。换句话说，本页钉住的是「修后不会一律报错、也绝不会把无法判定的引用当成通过」这一条：判定不了就必须说判定不了。

## 心智模型

把引用解析想成一个两段式的判定。第一段是**消歧**：给定 `File.cs:N`，先在树里找出所有同名文件；只有一个命中就继续，多于一个就要求引用自带足够的路径信息。第二段是**核验**：在唯一确定的文件上做边界检查与行内容检查。关键的心智模型是：**当第一段无法完成时，第二段根本无从谈起，此时唯一正确的输出是「不确定」，而不是「通过」**。静默跳过之所以危险，是因为它把「我不确定」伪装成了「没问题」，而调用方看到的是同一行 PASS，无法区分。fail closed 的含义就是：不确定必须显式地、可计数地暴露出来，让上层能据此拒绝放行。

## 怎么用

### 怎么拿到

把本页与正向页、负向页一起跑同一个判分器；三页的唯一差别是引用的形态，所以任何读数差异都可以直接归因到引用解析。

### 典型用法

修复后先确认正向页仍 PASS 且 `ambiguous=0`，再确认本页 FAIL 且 fail 串里出现 `J3 ambiguous-citations=1`；两条同时成立，才说明消歧生效且不确定性没有被吞掉。

### 坑

不要为了让本页变绿而给它补路径——补路径会把它变成第二个正向页，从而抹掉 fail-closed 的证明。也不要接受「ambiguous 计数非零但页面 PASS」这种状态，那正是修复前的缺陷形态。

## 关键成员

- `LoadContext.cs:19` — 裸 basename 引用，没有目录前缀；因为 `LoadContext.cs` 在树里重名，修后无法消歧，必须 fail closed 并计入 `ambiguous-citations`。

## 真实示例

```csharp
public static ObjectHeaderLoadData ResolveHeader(LoadContext context, int objectId)
{
    if (context == null)
    {
        return null;
    }
    return context.GetObjectWithId(objectId);
}
```

## 参见

- [AmbRefNegative](../AmbRefNegative)
- [AmbRefPositive](../AmbRefPositive)

## 导航

- [save-system 桶索引](../)
