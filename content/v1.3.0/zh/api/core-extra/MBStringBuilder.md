---
title: "MBStringBuilder"
description: "一个 ThreadStatic 复用的 StringBuilder 的 struct 外壳：Initialize 借、ToStringAndRelease 还，ToString 被故意打成断言失败并返回 null，用它拼 30 万行的 CharacterCode 才不会让 GC 停下来。"
---

# MBStringBuilder

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct MBStringBuilder`
**Base:** 无（`System.ValueType`；**不实现任何接口**，虽然方法名和 `System.Text.StringBuilder` 几乎一一对应）
**File:** `TaleWorlds.Library/MBStringBuilder.cs`（全文 150 行 / 4488 字节）

## 概述

`MBStringBuilder` 只有一个字段：`private StringBuilder _cachedStringBuilder`。它做的事是**从一条线程私有的缓存里借一个 `StringBuilder`，用完还回去**。缓存是嵌套私有类里的 `[ThreadStatic] private static StringBuilder _cachedStringBuilder`，容量上限 4096。

它在树里被 29 个文件使用，包括 [CharacterCode](../CharacterCode) 的 `CreateFrom`（要拼 `@---@` 分隔的长串）、`TaleWorlds.CampaignSystem.ExplainedNumber.GetExplanations()`（战斗结算的逐行解释）。这些地方如果用 `string +=` 或 `StringBuilder` 新建，跨版本后每次读档都会产生一批可回收垃圾。

`grep -rn "MBStringBuilder" bannerlord-1.3.0/` 里除了类型定义本身，全部出现模式都是同一个三行骨架：

```csharp
MBStringBuilder mbstringBuilder = default(MBStringBuilder);
mbstringBuilder.Initialize(16, "MethodName");
// 一串 mbstringBuilder.Append...(...) / AppendLine()
return mbstringBuilder.ToStringAndRelease();
```

**这个骨架不是风格问题，是强制契约**——见下面「心智模型」。

## 心智模型

把 `MBStringBuilder` 当成**「从池里借、必须还的租借凭证」**。三个设计决定解释了一切。

**第一，它被故意做成 `struct`，所以「忘记归还」表现为共享池被污染而不是内存泄漏。** `Acquire` 只在缓存位非空且 `capacity <= 4096` 时才复用，否则 `new StringBuilder(capacity)`。`Release` 只在 `sb.Capacity <= 4096` 时才放回缓存，然后 `Clear()`。超出 4096 的 builder **不会被缓存**——直接交给 GC。所以「大字符串也安全」，只是没有池化收益。

**第二，它是 `struct` 且字段是引用类型，于是拷贝是「引用拷贝」——这是本类最大的坑。** `var a = b;` 之后 `a._cachedStringBuilder` 和 `b._cachedStringBuilder` 指向同一个对象，`a.Release()` 只把 `a` 的字段置 null，`b` 还在用。反过来最危险的情形是：两个拷贝各自 `Release()`，于是**同一个 `StringBuilder` 被两次塞进 `[ThreadStatic]` 槽**，后一次覆盖前一次；此时池里的那个 builder 很可能还被别的代码持有 → 内容被静默清空或串味。所以**永远不要把 `MBStringBuilder` 传给方法、放进数组、存成字段**。引擎全树的用法都是纯局部变量。

**第三，`ToString()` 被刻意做成陷阱。** 覆写体是 `Debug.FailedAssert("Don't use this. Use ToStringAndRelease instead!", ...)` 然后 `return null;`。看 [Debug](../Debug) 的 `FailedAssert` 实现——`if (Debug.DebugManager != null)` 才记录。**所以在正式版里 `ToString()` 就是安静地返回 `null`。** 这意味着 `$"{mbStringBuilder}"`、字符串插值、`string.Concat(someMBStringBuilder)`、`String.Format("{0}", sb)` 全都会给你一个 `null`，不抛异常。这就是为什么必须用 `ToStringAndRelease()`——它先 `_cachedStringBuilder.ToString()`（拿到真正的字符串），再 `Release()` 归还，最后把 `result` 返回。

`Initialize` 的第二个参数是 `[CallerMemberName]`，官方所有调用点都**显式传了方法名字符串**（`Initialize(16, "GetExplanations")`）。这个参数在 `Initialize` 方法体里**根本没被使用**——纯粹是给 profiler / 调试器做标记用的。想省掉可以 `mbstringBuilder.Initialize();`，但跟官方风格不一致。第一个参数 `capacity` 默认 16，已知长度时传大值：`MainHeroSaveVisualSupplier.GetMainHeroVisualCode` 传的是 `1024`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Initialize` | `public void Initialize(int capacity = 16, [CallerMemberName] string callerMemberName = "")` | 从线程缓存借一个 `StringBuilder` 存进字段。`callerMemberName` 是给调试工具看的标记，**方法体内未被使用**；靠 `[CallerMemberName]` 自动填充，但官方调用点全部显式传值 |
| `Append`（6 个重载） | `Append(char)` / `Append(int)` / `Append(uint)` / `Append(float)` / `Append(double)` / `Append<T>(T value)` | 每个都转发给内部 `_cachedStringBuilder.Append(...)` 后 `return this`。返回 `this` 是为了链式调用，但**返回值仍是结构体副本**，链式调用本身是安全的 |
| `AppendLine()` | `public MBStringBuilder AppendLine()` | 转发给 `StringBuilder.AppendLine()`，即追加 `Environment.NewLine`。同样 `return this` |
| `AppendLine<T>` | `public MBStringBuilder AppendLine<T>(T value)` | 先 `Append<T>(value)` 再 `AppendLine()`。**它不插入任何分隔符，只追加换行** |
| `ToStringAndRelease` | `public string ToStringAndRelease()` | **正确的终结方式**：`string result = this._cachedStringBuilder.ToString(); this.Release(); return result;`。先取值再归还，所以返回值不会因为归还而失效 |
| `Release` | `public void Release()` | 把 `_cachedStringBuilder` 还回线程缓存并 `Clear()`，然后把**自己这份**字段置 `null`。字段置 null 是为了让「二次 Release」退化成 `NullReferenceException` 而不是静默双重归还 |
| `Length` | `public int Length { get; }` | 转发 `_cachedStringBuilder.Length`。用于预估最终字符串长度 |
| `ToString` | `public override string ToString()` | **陷阱**：`Debug.FailedAssert("Don't use this. Use ToStringAndRelease instead!", ...)` 后 `return null`。正式版里 DebugManager 为 null，断言不触发，直接返回 null |
| `CachedStringBuilder.Acquire` | `private static StringBuilder Acquire(int capacity = 16)`（嵌套私有类） | 缓存位非空且 `capacity <= 4096` 时复用并 `EnsureCapacity`，否则 `new StringBuilder(capacity)` |
| `CachedStringBuilder.Release` | `private static void Release(StringBuilder sb)`（嵌套私有类） | `sb.Capacity <= 4096` 才放回缓存位，然后 `Clear()` |
| `CachedStringBuilder.GetStringAndReleaseBuilder` | `private static string GetStringAndReleaseBuilder(StringBuilder sb)`（嵌套私有类） | 「ToString 后归还」的独立函数形式。`grep -rn "GetStringAndReleaseBuilder" bannerlord-1.3.0/` 命中 **1** 处（就是它自己的定义）——**全树无调用方，是死代码**，行为已被 `ToStringAndRelease` 取代 |
| `MaxBuilderSize` | `private const int MaxBuilderSize = 4096`（嵌套私有类） | Acquire/Release 双向的容量门槛。注意 `Acquire` 硬编码字面量 `4096` 而不是引用这个常量——改常量不会改行为 |
| `_cachedStringBuilder`（字段） | `private StringBuilder _cachedStringBuilder` | 唯一状态。`default(MBStringBuilder)` 下是 `null`，**这就是为什么每个用法都要先 `Initialize`** |

## 真实示例

最小骨架，逐字照抄自 `TaleWorlds.CampaignSystem/ExplainedNumber.cs:111-118` 的 `GetExplanations()`：

```csharp
public string GetExplanations()
{
    if (this._explainer == null)
    {
        return "";
    }
    MBStringBuilder mbstringBuilder = default(MBStringBuilder);
    mbstringBuilder.Initialize(16, "GetExplanations");
    foreach (ValueTuple<string, float> valueTuple in this._explainer.GetLines(this.BaseNumber, this._unclampedResultNumber, null, null, null))
    {
        string value = string.Format("{0} : {1}{2:0.##}\n", valueTuple.Item1, (valueTuple.Item2 > 0.001f) ? "+" : "", valueTuple.Item2);
        mbstringBuilder.Append<string>(value);
    }
    return mbstringBuilder.ToStringAndRelease();
}
```

三点值得注意：**①** `default(MBStringBuilder)` 而不是 `new MBStringBuilder()`——两者等价，但 `default` 更明确表达「这是个零状态、靠 Initialize 装配的 struct」。**②** 官方写的是 `mbstringBuilder.Append<string>(value)`，显式给泛型参数而不是靠重载解析——因为 `value` 是 `string`，显式写可读性更好且行为确定。**③** 中间的 `string.Format` 是允许的，因为**内部** `StringBuilder` 构造临时字符串跟池化不冲突；被池化的是外层的字符缓冲。

长串拼接（`TaleWorlds.Core/CharacterCode.cs:112` 起的 `CreateFrom`）：

```csharp
MBStringBuilder mbstringBuilder = default(MBStringBuilder);
mbstringBuilder.Initialize(16, "CreateFrom");
mbstringBuilder.Append<string>("@---@");
mbstringBuilder.Append<string>(text);
mbstringBuilder.Append<string>("@---@");
mbstringBuilder.Append<string>(characterCode.BodyProperties.ToString());
mbstringBuilder.Append<string>("@---@");
mbstringBuilder.Append<string>(characterCode.IsFemale ? "1" : "0");
mbstringBuilder.Append<string>("@---@");
mbstringBuilder.Append<string>(characterCode.IsHero ? "1" : "0");
mbstringBuilder.Append<string>("@---@");
mbstringBuilder.Append<string>(((int)characterCode.FormationClass).ToString());
return mbstringBuilder.ToStringAndRelease();
```

因为 `Append<T>` 是泛型的，所以连 `int` 和 `bool` 也走 `Append<string>`——`T` 选 `string` 时内部调的是 `StringBuilder.Append(string)`，而 `value` 已经被 `.ToString()` 成字符串了。**这里连着十几行 `Append<string>` 却不写一个 `+` 号，就是池化的全部意义。**

已知长度时传大 `capacity`（`SandBox.View/MainHeroSaveVisualSupplier.cs:21`）：

```csharp
public string GetMainHeroVisualCode()
{
    MBStringBuilder mbstringBuilder = default(MBStringBuilder);
    mbstringBuilder.Initialize(1024, "GetMainHeroVisualCode");
    mbstringBuilder.Append<string>(hero.Name.ToString());
    mbstringBuilder.Append<string>(hero.Age.ToString());
    return mbstringBuilder.ToStringAndRelease();
}
```

`capacity` 只是预分配提示，传大了不会截断任何东西——`Acquire` 里是 `cachedStringBuilder.EnsureCapacity(capacity)`，只增不减。

提前放弃时必须显式 `Release`：

```csharp
public string BuildCode(Hero hero)
{
    MBStringBuilder mbstringBuilder = default(MBStringBuilder);
    mbstringBuilder.Initialize(256, "BuildCode");
    if (hero == null)
    {
        mbstringBuilder.Release();
        return string.Empty;
    }
    mbstringBuilder.Append<string>(hero.Name.ToString());
    return mbstringBuilder.ToStringAndRelease();
}
```

**所有 `return` / `throw` 路径都必须归还。** 走 `ToStringAndRelease` 的路径自动归还；提前返回就得手写 `Release()`。忘了归还不会崩——那个 `StringBuilder` 只是被 GC 回收，池位保持为 null——但下一个 `Acquire` 就得 `new`，池化收益归零。

## 风险与边界

- **`ToString()` 静默返回 `null`，不抛异常。** 这是本类最高危的一点，因为触发它的写法看起来完全无害：`$"Name: {mbStringBuilder}"`、`string.Format("{0}", mbStringBuilder)`、`sb + someMBStringBuilder`、`TextObject` 的构造重载如果接受 `object` 就会隐式调它。正式版里 `Debug.DebugManager` 为 null 所以 `FailedAssert` 不记录任何东西，你只会得到一个 `null` 混进最终字符串。**规则：只有 `ToStringAndRelease()` 一条路。**
- **结构体 + 引用字段 = 拷贝即共享别名。** 把 `MBStringBuilder` 传给任何方法、存进数组/集合/字段、或 `var b = mbStringBuilder;`，都会让两个变量持有同一个 `_cachedStringBuilder`。两个副本各自 `Release()` 会把同一个 builder 两次塞进线程缓存槽，后一次覆盖前一次 → 池里的 builder 可能还被别处持有，内容被 `Clear()` 静默清掉。**只允许纯局部变量使用。**
- **忘记 `Initialize` 就是 `NullReferenceException`。** `default(MBStringBuilder)` 的字段是 `null`，第一次 `Append` 直接炸。没有任何断言或友好报错。这是官方坚持写全 `default(...)` + `Initialize(...)` 两行的原因——第一行不是可选的仪式。
- **`Release` 之后字段置 null，二次 `Release` 会 `NullReferenceException`。** 这算好事（快速失败），但如果你在 `try` 里 `ToStringAndRelease()` 又在 `catch` 里补一句 `Release()`，就会炸——`ToStringAndRelease` 内部已经 `Release()` 过了。
- **异常路径不会自动归还。** `Append` 之间如果抛异常（比如 `Append<T>(null)` 内部 `Append(null)` 对某些 T 会 `ArgumentNullException`），那个 builder 就被泄漏出池了。不崩，但池化失效。要严格就用 `try/finally` 包住 `Release`，注意别和 `ToStringAndRelease` 重复。
- **`AppendLine<T>` 不加分隔符。** 它就是 `Append<T>` + `AppendLine()`。想要逗号分隔得自己 `Append<string>(", ")`。别指望它像 `string.Join`。
- **跨线程绝对不能传。** 缓存是 `[ThreadStatic]`。A 线程 `Initialize`、B 线程 `Release`，会把 B 线程缓存位指向 A 的 builder；B 自己再 `Acquire` 就拿到了 A 正在用的对象。所有调用必须在同一个线程内完成初始化到归还的全过程。引擎全树的使用点都是同步 UI / 单帧代码。
- **`MaxBuilderSize` 常量没有被真正使用。** `Acquire` 和 `Release` 里都是硬编码字面量 `4096`，不是 `MaxBuilderSize`。想改阈值得改两处字面量，改常量无效。这是反编译源码的一个反例。
- **`GetStringAndReleaseBuilder` 是死代码。** 嵌套私有类里的 `private static` 方法，`grep -rw` 在 `bannerlord-1.3.0/` 全树只有 1 处命中（自己的定义）。外部无法访问，可以当作不存在。
- **`callerMemberName` 完全未被使用。** 它只是把调用方信息传给一个什么都不做的形参。如果你的 profiler 钩子靠这个字段识别热点，官方写法是显式传方法名字符串（`Initialize(16, "GetExplanations")`），因为 `[CallerMemberName]` 在 lambda 里会给出编译器生成的名字。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/MBStringBuilder.cs:8`，声明是 `public struct MBStringBuilder` —— **是结构体，而且没有任何构造函数。** 所以唯一合法的诞生方式是引擎的写法：`MBStringBuilder sb = default(MBStringBuilder);` 然后立刻 `sb.Initialize(...)`。

`Initialize(int capacity = 16, [CallerMemberName] string callerMemberName = "")`（`MBStringBuilder.cs:11`）的默认参数带 `[CallerMemberName]`，所以**你不传第二个参数时编译器会自动填入调用者方法名** —— 这是排查缓冲区来源时的线索，写 `Initialize(64)` 就够了。

底层资源是池化的：`this._cachedStringBuilder = MBStringBuilder.CachedStringBuilder.Acquire(capacity);`。**所以「不用了」必须还回去**，唯一出口是 `ToStringAndRelease()`（`MBStringBuilder.cs:17`）或 `Release()`（`MBStringBuilder.cs:25`，它把 `_cachedStringBuilder` 置 null）。

**一段可直接跑的三行标准形状**（形态逐字取自 `TaleWorlds.Core/Banner.cs:567` 的引擎写法）：

```csharp
MBStringBuilder sb = default(MBStringBuilder);
sb.Initialize(32);
sb.Append<int>(someId); sb.Append('.'); sb.Append<string>("name");
string result = sb.ToStringAndRelease();
```

`Append` 有十个重载（`char` / `int` / `uint` / `float` / `double` / 泛型 `Append<T>` / 两个 `AppendLine`），全部返回 `MBStringBuilder` 自身以便链式。**注意它不是引用类型，但内部字段是共享的** —— `default(MBStringBuilder)` 拿到的是一个壳，真正的缓冲区在第一次 `Initialize` 时才挂上去。所以**漏掉 `Initialize` 就直接 `Append` 会 NRE**。

**必须走 `ToStringAndRelease()`，不能等隐式转换。** 原因是 `ToString()` 的方法体（`MBStringBuilder.cs:99`）第一句是 `Debug.FailedAssert("Don't use this. Use ToStringAndRelease instead!", ...)`,第二句 `return null;`。它在正式版里不抛异常也不记录，所以 `$"Name: {sb}"` 会把一个 `null` 静默混进你的最终字符串。

**`ToStringAndRelease()` 只能调一次。** 它内部先 `this._cachedStringBuilder.ToString()` 再 `this.Release()`，而 `Release()` 把字段置 null。第二次调就是 NRE，不是返回空串。

**最常见的坑：`ToString()` 静默返回 `null`，不抛异常。** 因为触发它的写法看起来完全无害：`$"Name: {mbStringBuilder}"`、`string.Format("{0}", ...)`、`sb + someMBStringBuilder`。你只会得到一个 `null` 混进最终字符串。这条已在「风险与边界」首条展开。

## 跨版本提示

`MBStringBuilder.cs` 在 1.3.0 是 4488 字节，1.3.15 起到 1.5.3 都是 **4481 字节**，差的 7 字节同样只是 `: base(...)` 一类的格式化调整（1.3.0 的反编译器输出与新版有换行差异）。**public 成员集合跨 1.3 → 1.5 三个大版本逐条等价**：6 个 `Append` 重载、`AppendLine` 两个、`Initialize`、`ToStringAndRelease`、`Release`、`Length`、`ToString`（含 `FailedAssert` 那句提示），嵌套私有类的 `Acquire`/`Release` 与 4096 阈值也都没动。

所以这条「借—用—还」契约在所有版本上完全稳定。变的只有使用规模：1.3.0 有 29 个文件用 `MBStringBuilder`，后续版本随 UI 重写和战斗结算细化只会增加。**升级时唯一要重新检查的是你自己写的那些提前返回路径有没有漏 `Release()`**——框架不会提醒你，池位静默失效。

## 依赖关系

- 底层类型：内部字段是 `System.Text.StringBuilder`，所有 `Append` 全部转发给它——本类不加任何语义
- 断言依赖：[Debug](../Debug) 的 `FailedAssert(string message, [CallerFilePath] string callerFile = "", [CallerMemberName] string callerMethod = "", [CallerLineNumber] int callerLine = 0)` 是 `ToString()` 陷阱的实现基础，它的第一个 `[CallerFilePath]` 参数决定了断言里那串 `C:\BuildAgent\work\mb3\...` 路径
- 调用方：`TaleWorlds.CampaignSystem.ExplainedNumber.GetExplanations()`（战斗结算逐行解释）与 `TaleWorlds.Core.CharacterCode.CreateFrom()`（角色代码长串）是树里最典型的两处
- 相关但不同的容器：需要元素级事件通知时用 [MBBindingList](../MBBindingList)；纯字符拼接不要用 [MBList](../MBList)，它继承 `List<T>` 而非 `StringBuilder`
- UI 侧最终消费：`TaleWorlds.CampaignSystem.ViewModelCollection.Inventory.ItemFlagVM.GetIconPath()` 把结果送进 `ImageIdentifier`
- 桶首页：[core-extra API 分区](../)
