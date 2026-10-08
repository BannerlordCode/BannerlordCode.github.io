---
title: "BindingPath"
description: "UI 绑定路径：按反斜杠分段的对象属性路径，支持 SubPath/ParentPath 切分、Simplify 归约 ..、Append 拼接与前缀相关性判断。"
---
# BindingPath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BindingPath`
**Base:** `System.Object`
**File:** `TaleWorlds.Library/BindingPath.cs`

## 概述

GauntletUI 绑定系统里描述「从根 ViewModel 走到某个属性」的一段路径。分隔符是**反斜杠 `\`**（不是斜杠），例如 `SubPanel.Item0.Name`。构造时把字符串按 `\` 切成 `Nodes` 数组；反过来 `Nodes` 构造时用 `MBStringBuilder` 拼回带 `\` 的 `_path`。

有四条构造路径：单字符串（切分）、整数（变成单节点字符串，列表下标专用）、`IEnumerable<string>`（直接当节点列表，**路径重新拼一遍**）、以及 `CreateFromProperty`（单节点且**不切分**——这和 `new BindingPath("A\\B")` 不同，前者把 `A\B` 当成一个属性名）。

值语义靠 `_path` 字符串：`Equals`、`GetHashCode`、`operator ==`/`!=` 全部只比 `Path`。**注意 `Path` 与 `Nodes` 可能不一致**——`Append` 用的是私有构造器拼 `_path`，一致；但 `DecrementIfRelatedWith` 直接改 `Nodes` 的某一项而**不重算 `_path`**，调用之后相等性判断会失真。

## 心智模型

在 [ViewModel](../ViewModel) 的 `GetViewModelAtPath(BindingPath path)` 里，路径是这样被消费的：

1. 读 `path.SubPath`。为 null 说明只有一段，直接返回 `this`。
2. 拿 `SubPath.FirstNode` 当属性名，反射取该属性值。
3. 值是 `ViewModel` → 递归 `GetViewModelAtPath(subPath)`；值是 `IMBBindingList` → 走列表分支，用 `Convert.ToInt32(SubPath.FirstNode)` 当下标。
4. 走不通返回 null，不抛（除了下标那段会因非数字抛 `FormatException`）。

所以路径的**段数决定解析深度**，每一段要么是属性名要么是列表下标。[ViewModel](../ViewModel) 的属性缓存表里 `GetProperty(subPath.FirstNode)` 找不到就返回 null —— 属性名大小写必须完全匹配，因为反射字典是 `Dictionary<string, PropertyInfo>` 默认区分大小写。

常见误用：

- **用 `/` 当分隔符。** `new BindingPath("A/B")` 得到的 `Nodes` 只有一个元素 `"A/B"`，后续 `GetProperty("A/B")` 查不到 → 返回 null。分隔符是 `\`。
- **`CreateFromProperty` 和单字符串构造混用。** `CreateFromProperty("A\\B")` 不切分，得到单节点 `"A\\B"`；`new BindingPath("A\\B")` 得到两节点。要引用一个字面属性名就用 `CreateFromProperty`。
- **以为 `Nodes` 只读所以不可变。** `Nodes` 是 `public string[] { get; private set; }`——**数组本身是可变的**，`DecrementIfRelatedWith` 就在原地改它。而且改完 `_path` 不更新。
- **`SubPath` / `ParentPath` 在单节点时返回 null，不是空路径。**
- **`Simplify` 只消 `..`，不消 `.`。** 而且遇到 `..` 时如果栈顶也是 `..` 就原样保留（不吞掉成对的 `..`）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public BindingPath(string path)` | 主构造。`_path = path`（**原样保存，不规范化**），`Nodes = path.Split('\\', StringSplitOptions.RemoveEmptyEntries)`。传 null 会 NRE；传空串得到 `Nodes.Length == 0`。 |
| `.ctor` | `public BindingPath(int path)` | 列表下标专用。`_path = path.ToString()`，`Nodes = new[] { _path }`。**单节点，不切分。** |
| `.ctor` | `public BindingPath(IEnumerable<string> nodes)` | 直接把序列当节点列表（`ToArray`），然后用 `MBStringBuilder` 用 `\` 重新拼出 `_path`。**这是构造「非字符串来源路径」的唯一入口。** |
| `CreateFromProperty` | `public static BindingPath CreateFromProperty(string propertyName)` | 单节点路径，**不切分**。用于属性名本身可能含特殊字符的情况。与 `new BindingPath(name)` 在含 `\` 时语义不同。 |
| `Path` | `public string Path { get; }` | 拼好的完整路径字符串（只读）。`Equals` / `GetHashCode` / `operator ==` 都只比它。 |
| `Nodes` | `public string[] Nodes { get; private set; }` | 分段后的节点数组。setter 是 private，但**数组内容可被外部改**（见 `DecrementIfRelatedWith`）。 |
| `FirstNode` | `public string FirstNode { get; }` | `Nodes[0]`。**`Nodes` 为空时抛 `IndexOutOfRangeException`**——不像 `LastNode` 有判空。 |
| `LastNode` | `public string LastNode { get; }` | `Nodes[Length - 1]`；**`Length == 0` 时返回空串 `""`**，不抛。 |
| `SubPath` | `public BindingPath SubPath { get; }` | 去掉首段后的路径。**`Nodes.Length <= 1` 时返回 null**（不是空路径）。[ViewModel](../ViewModel) 的 `GetViewModelAtPath` 靠这个 null 判断「到底了」。 |
| `ParentPath` | `public BindingPath ParentPath { get; }` | 去掉末段后的路径。**`Nodes.Length <= 1` 时返回 null。** 内部用字符串 `+=` 拼接（无 `MBStringBuilder`），段数多时有额外分配。 |
| `Append` | `public BindingPath Append(BindingPath bindingPath)` | 返回**新对象**：`new BindingPath(this.Nodes, bindingPath.Nodes)`。`this` 不变，参数为 null 会 NRE。 |
| `Simplify` | `public BindingPath Simplify()` | 归约 `..`：遇到 `..` 且栈非空且栈顶不是 `..` 就弹出栈顶，否则原样压入。**不处理 `.`**，也不合并 `..\..`。返回新对象。 |
| `IsRelatedWith` | `public bool IsRelatedWith(BindingPath referencePath)` | `IsRelatedWithPath(this.Path, referencePath)`，即 `referencePath.Path.StartsWith(this.Path)`。**纯字符串前缀比较，没有路径段边界检查**——`"Item1"` 会匹配到 `"Item10"`。 |
| `IsRelatedWithPath` | `public static bool IsRelatedWithPath(string path, BindingPath referencePath)` | 静态版，`referencePath.Path.StartsWith(path)`。`path` 为空串时**恒为 true**。 |
| `IsRelatedWithPathAsString` | `public static bool IsRelatedWithPathAsString(string path, string referencePath)` | 纯字符串版。用于还没构造出 `BindingPath` 对象的早期比较。 |
| `DecrementIfRelatedWith` | `public void DecrementIfRelatedWith(BindingPath path, int startIndex)` | **原地修改**：若 `IsRelatedWith(path)` 且 `path.Nodes.Length < this.Nodes.Length`，取第 `path.Nodes.Length` 段，`int.TryParse` 成功且 `>= startIndex` 就减 1 并写回字符串。**只改 `Nodes`，不重算 `_path`——调用后 `Equals` / `GetHashCode` / `operator ==` 会与 `Path` 不一致。** 这是给集合批量移除/前移用的内部工具。 |
| `GetHashCode` | `public override int GetHashCode()` | `this._path.GetHashCode()`。只基于路径字符串，**不含节点内容**。 |
| `Equals` | `public override bool Equals(object obj)` | `obj as BindingPath` 非 null 且 `this.Path == other.Path`。**与非 `BindingPath` 对象永远不等。** |
| `operator ==` | `public static bool operator ==(BindingPath a, BindingPath b)` | 两边都 null → true；一边 null → false；否则 `a.Path == b.Path`。 |
| `operator !=` | `public static bool operator !=(BindingPath a, BindingPath b)` | `!(a == b)`。 |
| `ToString` | `public override string ToString()` | 返回 `Path`。 |

## 怎么用

### 怎么拿到它

`BindingPath` 是 `TaleWorlds.Library` 里的 `public class BindingPath`（`TaleWorlds.Library/BindingPath.cs:8`），用来表达 ViewModel 的属性绑定路径。三个构造器：`BindingPath(string path)`（`:57`）按 `,` 或 `.` 切分字符串、`BindingPath(int path)`（`:64`）给下标路径、`BindingPath(IEnumerable<string> nodes)`（`:77`）直接给节点数组。

派生形式只有两个方向：`public BindingPath SubPath`（`:124`，**去掉第一个节点**，也就是往深处一层）和 `public BindingPath ParentPath`（`:148`，回到上一层）。没有任意层数的切片。

判断两个路径是否同源用 `public bool IsRelatedWith(BindingPath referencePath)`（`:209`），以及它的两个静态包装 `IsRelatedWithPath(string path, BindingPath referencePath)`（`:203`）、`IsRelatedWithPathAsString(string path, string referencePath)`（`:197`）。

### 典型用法

```csharp
using TaleWorlds.Library;
using System.Collections.Generic;

BindingPath hp = new BindingPath("MyVm.Health");        // BindingPath.cs:57
BindingPath hp2 = new BindingPath(new[] { "MyVm", "Health" });   // :77

// 沿路径下钻一层
BindingPath deeper = hp.SubPath;                        // :124
BindingPath back   = hp.ParentPath;                     // :148

// 判断某个绑定是不是挂在 hp 底下（子路径也算）
if (hp.IsRelatedWith(new BindingPath("MyVm")))           // :209
{
    Debug.Print(hp.FirstNode + " -> " + hp.LastNode, 0);  // :27 / :37
}

// 相对判断：字符串版给 UI 声明用
if (BindingPath.IsRelatedWithPathAsString("MyVm.Health.Max", hp.Path))   // :197
{
    // 命中
}
```

### 最容易踩的坑

**以为 `SubPath` / `ParentPath` 是可以任意叠加的切片，然后在一层路径上连续调三次 `SubPath` 取到想要的那一段。** `SubPath`（`:124`）和 `ParentPath`（`:148`）是**一次性各剥一个节点**，没有偏移量参数，也没有 `GetRange`。在只有两个节点的 `"MyVm.Health"` 上连调两次 `SubPath` 得到的是空路径而不是异常，于是后面拿它去 `Equals`（`:176`）比较时永远不相等，`IsRelatedWith`（`:209`）也恒为 false——现象是「绑定没生效」而不是报错。

第二个坑是这个类型**重载了 `==` / `!=`**（`:183` / `:191`）。`BindingPath` 同时又覆写了 `Equals(object)`（`:176`）和 `GetHashCode()`（`:170`），所以 `==` 和 `Equals` 在正常用法下一致；但如果你把它放进 `Dictionary` 的键（`GetHashCode` 参与分桶）同时又用 `==` 去比对两组节点顺序不同的路径，它们不相等而 `ToString()`（`:255`）打出来可能看起来一样。**节点顺序必须和构造时完全一致**，不要依赖字符串比较做等价判断。

## 真实示例

构造、遍历、拼接（注意分隔符是反斜杠）：

```csharp
// 字符串构造：按 \ 切段
BindingPath full = new BindingPath("SubPanel\\Item0\\Name");
string head = full.FirstNode;      // "SubPanel"
string tail = full.LastNode;       // "Name"

// 逐段下钻（GetViewModelAtPath 内部就是这个循环）
BindingPath cursor = full;
while (cursor.SubPath != null)
{
    Debug.Print("segment: " + cursor.FirstNode, 0);
    cursor = cursor.SubPath;
}

// 拼一条更长的路径：Append 返回新对象，原对象不变
BindingPath extended = full.Append(new BindingPath("Value"));
```

按名解析 ViewModel 属性（[ViewModel](../ViewModel) 的反射读取，属性名大小写必须精确）：

```csharp
ViewModel root = new MyTradeScreenViewModel();
BindingPath path = new BindingPath("SubPanel\\Item0\\Name");
object target = root.GetViewModelAtPath(path);
if (target == null)
{
    Debug.Print("binding target not found: " + path.Path, 0);
}
```

下标与归约（列表下标路径、集合增删后的前移）：

```csharp
BindingPath byIndex = new BindingPath(3);      // 单节点 "3"
BindingPath byString = new BindingPath("Item3");

// 归约 ..
BindingPath raw = new BindingPath("A\\B\\..\\C");
BindingPath simplified = raw.Simplify();       // A\C

// 集合删除后把后面的下标前移（原地改 Nodes）
BindingPath moved = new BindingPath("List\\5\\Name");
moved.DecrementIfRelatedWith(new BindingPath("List"), 0);
```

## 风险与边界

- **分隔符是 `\` 不是 `/`。** 用 `/` 得到单节点路径，属性查找必然落空。
- **`FirstNode` 在空 `Nodes` 上抛异常。** `new BindingPath("")` 得到长度 0 的数组（`RemoveEmptyEntries`），此时取 `FirstNode` 是 `IndexOutOfRangeException`。`LastNode` 有判空、`FirstNode` 没有。
- **`SubPath` / `ParentPath` 单节点返回 null。** 直接 `.Path` 会 NRE，必须判空。
- **`IsRelatedWith` 是裸字符串前缀。** `"Item1"` 会匹配 `"Item10"`，`"A\\B"` 也会匹配 `"A\\Bx"`。做集合失效判断时这个假阳性很常见。
- **`DecrementIfRelatedWith` 破坏值一致性。** 它改 `Nodes` 不改 `_path`，之后 `Equals` / `GetHashCode` / `operator ==` 全部按旧 `_path` 判。**调用后不要把对象放进 `Dictionary` 或 `HashSet`。**
- **`Nodes` 数组可被外部改写。** 声明是 `string[]` 只读属性，但元素可变。任何持有 `Nodes` 引用的代码都能破坏路径不变量。
- **`Append` 不校验 null。** `path.Append(null)` 在私有构造器里 `secondNodes.Length` 处 NRE。
- **`Simplify` 不处理 `.` 也不合并 `..`。** `A\.\B` 原样保留；`A\..\..\B` 归约成 `..\B`。
- **`_path` 不做规范化。** 单字符串构造保留原样，`A\\\\B`（连续分隔符）切段后 `_path` 仍是原串，节点数却不同 —— **`Path` 与 `Nodes` 可以不同步**。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Library/BindingPath.cs` 逐行比对，**public 表面完全一致**：三个公开构造器 + `CreateFromProperty`、`Path` / `Nodes` / `FirstNode` / `LastNode` / `SubPath` / `ParentPath` 六个属性、`Append` / `Simplify` / `IsRelatedWith` / `IsRelatedWithPath` / `IsRelatedWithPathAsString` / `DecrementIfRelatedWith`、`GetHashCode` / `Equals` / `ToString` 和两个运算符全都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/BindingPath.cs`（234 行）与 `bannerlord-1.4.6/TaleWorlds.Library/BindingPath.cs`（264 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 17 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 234 行、1.4.6 是 264 行，行数差来自反编译注释。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 唯一消费者：[ViewModel](../ViewModel) 的 `GetViewModelAtPath(BindingPath)` / `GetViewModelAtPath(BindingPath, bool)` 逐段解析本对象
- 组合目标：路径终点通常是另一个 `ViewModel`（递归）或 `IMBBindingList`（按下标取）
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../ViewModel`](../ViewModel) · [`../PropertyObject`](../PropertyObject) · [`../MBList`](../MBList)
- 父索引：[`../_index`](../_index)
