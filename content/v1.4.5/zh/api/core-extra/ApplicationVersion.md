---
title: "ApplicationVersion"
description: "游戏版本号值类型：成熟度阶段 + 四个整数（Major/Minor/Revision/ChangeSet），提供解析、字符串化与全套比较运算。它的比较语义有一处真实裂缝：operator< / operator> 不比较 ChangeSet，而 IsOlderThan 比较——同一个语义有两套实现。"
---

# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion`
**Base:** 无
**File:** `TaleWorlds.Library/ApplicationVersion.cs`

## 概述

`ApplicationVersion` 是游戏版本号的值类型：**一个成熟度阶段（[ApplicationVersionType](../ApplicationVersionType)）加四个整数**（`Major` / `Minor` / `Revision` / `ChangeSet`）。它提供字符串解析（`FromString`）、XML 版本文件读取（`FromParametersFile`）、字符串化（`ToString`），以及一整套比较运算（`==` / `!=` / `>` / `<` / `>=` / `<=` 与 `IsSame` / `IsOlderThan` / `IsNewerThan`）。

它承担的是**「存档与模块的版本兼容性判断」**这一环，Campaign 层有成百上千处 `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("e1.8.0.0")` 这样的判断（见 `Clan.cs`、`Campaign.cs`、`CharacterRelationManager.cs`）。**它是整个存档迁移机制的地基。**

## 心智模型

把它当成**「一个五段式版本号，提供两套排序」**，而不是「一个可以放心用 `>` 的版本号」。后一句才是真正的坑。

**心智模型的核心是「两套比较实现，语义并不一致」。** 这是本页最需要记住的一条：

| | 比较类型 | 阶段 | Major | Minor | Revision | **ChangeSet** |
| --- | --- | --- | --- | --- | --- | --- |
| `operator==` (`:158-166`) | 判等 | ✅ | ✅ | ✅ | ✅ | ❌ **不比** |
| `IsSame(other, checkChangeSet)` (`:76-90`) | 判等 | ✅ | ✅ | ✅ | ✅ | 由参数决定 |
| `operator>` (`:170-190`) | 大于 | ✅ | ✅ | ✅ | ✅ | ❌ **不比** |
| `IsOlderThan(other)` (`:71-100`) | 小于 | ✅ | ✅ | ✅ | ✅ | ✅ **比** |
| `operator<` (`:192-198`) | 小于 | ✅ | ✅ | ✅ | ✅ | ❌ 委托给 `>` |
| `operator<=` (`:206-212`) | 小于等于 | ✅ | ✅ | ✅ | ✅ | ❌ 委托给 `<` |
| `IsNewerThan(other)` (`:102-110`) | 大于 | ✅ | ✅ | ✅ | ✅ | 仅当完全相同时返回 false |

**`operator<` 与 `IsOlderThan` 会给出不同答案。** 具体地说：取 `a = v1.2.3.100` 与 `b = v1.2.3.200`，两者的阶段与三段版本号完全相同、只有 ChangeSet 不同。此时：

- `a < b` → **false**（`operator<` 实现是 `if (a == b || a > b) return false;`，而 `a == b` 只比到 `Revision`，两者相等，所以直接返回 false）；
- `a.IsOlderThan(b)` → **true**（它最后一步是 `if (Revision == other.Revision && ChangeSet < other.ChangeSet) return true;`）。

**这不是 bug 的推测，是逐行比对两个方法的产物。** 含义很实际：**`ChangeSet` 是官方内部构建号**，同一版本的不同构建会共享 `Major.Minor.Revision`，只有 `ChangeSet` 不同。用 `<` 判断「我这版比存档旧吗」在跨构建时会得到错误答案，用 `IsOlderThan` 才对。

**第二个心智锚点是 `GetHashCode()` 违反了 `Equals` 契约。** `:168-171` 的实现是：

```csharp
public override int GetHashCode()
{
    return base.GetHashCode();
}
```

`base.GetHashCode()` 对值类型是**基于字段内存布局的哈希**，而 `Equals(object)`（`:153-156`）走的是 `operator==`（只比到 `Revision`）。**所以两个 `Equals` 为 true 的 `ApplicationVersion`，`GetHashCode()` 却不同。** 结论很硬：**不要把 `ApplicationVersion` 用作 `Dictionary` / `HashSet` 的键**——放进去就再也 `TryGetValue` 不回来。

**第三个锚点是阶段排序压过了版本号。** `IsOlderThan` 的第一句就是比较 `ApplicationVersionType`，而 [ApplicationVersionType](../ApplicationVersionType) 里 `Development`(4) > `Release`(3)。所以 `d1.0.0` 被判定为比 `v9.9.9` 新。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ApplicationVersion(ApplicationVersionType, int, int, int, int)` | `public ApplicationVersion(ApplicationVersionType applicationVersionType, int major, int minor, int revision, int changeSet)` | 唯一构造器，纯字段赋值。**它不做任何校验**——可以构造出 `new ApplicationVersion(ApplicationVersionType.Release, -5, 0, 0, 0)` 这样的负数主版本。 |
| `FromString` | `public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)` | 解析 `v1.2.3` 或 `e1.8.0.0` 形状的字符串。**段数不是 3 也不是 4 时 `throw new Exception("Wrong version as string")`（裸 Exception）**；首段为空时 `array[0][0]` 越界抛 `IndexOutOfRange`。三段时 `ChangeSet` 取 `defaultChangeSet`（默认 0）。 |
| `FromParametersFile` | `public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)` | 从 `BasePath.Name + "Parameters/Version.xml"` 读取（走 `VirtualFolders.GetFileContent`，不是 `System.IO`）。**内容为空串时返回 `Empty`**；否则走 `xmlDocument.ChildNodes[0].ChildNodes[0].Attributes["Value"].InnerText`——**这是三层节点下钻，XML 结构变一层就 IndexOutOfRange。** |
| `ToString` | `public override string ToString()` | 用 `GetPrefix(ApplicationVersionType)` 的结果拼出 `<prefix><Major>.<Minor>.<Revision>.<ChangeSet>`。**`Invalid` 的前缀是 `"i"`**，所以 `Empty.ToString()` 会得到 `i-1.-1.-1.-1` 这种串。 |
| `IsSame` | `public bool IsSame(ApplicationVersion other, bool checkChangeSet)` | 先比阶段与三段版本号；只有这些全相等时才按 `checkChangeSet` 决定是否比 `ChangeSet`。**传 `true` 才是严格相等。** |
| `IsOlderThan` | `public bool IsOlderThan(ApplicationVersion other)` | **唯一会比较 `ChangeSet` 的比较方法。** 顺序是阶段 → Major → Minor → Revision → ChangeSet，**遇到第一个不等就短路返回**。注意 `Revision` 相等且 `ChangeSet` 也相等时返回 `false`（此时是"相同"而非"更旧"）。 |
| `IsNewerThan` | `public bool IsNewerThan(ApplicationVersion other)` | 实现是 `if (!IsSame(other, checkChangeSet: true)) return !IsOlderThan(other); return false;`。**完全相同（严格相等）时返回 false**——因为「新于」不含「等于」。它**不**使用 `operator>`。 |
| `operator==` | `public static bool operator ==(ApplicationVersion a, ApplicationVersion b)` | **只比阶段 + Major + Minor + Revision，不比 `ChangeSet`。** 同一个版本的两个不同构建会被判为相等。 |
| `operator>` | `public static bool operator >(ApplicationVersion a, ApplicationVersion b)` | 阶段 → Major → Minor → Revision，**到 `Revision` 为止，没有 `ChangeSet` 分支**。这是它与 `IsOlderThan` 的分歧根源。 |
| `operator<` / `operator<=` / `operator>=` | 三个运算符 | 全部以 `==` 与 `>` 为基础组合而成（`<` 是 `!(a == b || a > b)`，`<=` 是 `a == b || a < b`，`>=` 是 `a == b || a > b`）。**因为 `==` 不比 `ChangeSet`，这三个运算符继承了这个缺陷。** |
| `GetHashCode` | `public override int GetHashCode()` | **`return base.GetHashCode();`** ——基于字段内存布局，**与 `Equals` 的语义不一致**。**这使本类型无法安全地作为字典键。** |
| `Equals` | `public override bool Equals(object obj)` | 判 `null` 与类型，然后 `(ApplicationVersion)obj == this`——**即依赖 `operator==`，因而也不比 `ChangeSet`。** |
| `Empty` | `public static readonly ApplicationVersion Empty = new ApplicationVersion(ApplicationVersionType.Invalid, -1, -1, -1, -1);` | 哨兵版本。**`FromParametersFile` 在文件读不到时返回它**，`Campaign.cs:626` 用 `ApplicationVersion.Empty.ToString()` 给没有版本的模块拼标识串——所以那个串里会出现 `i-1.-1.-1.-1`。 |
| `DefaultChangeSet` | `public const int DefaultChangeSet = 115628;` | 一个**写死的历史构建号常量**。1.4.5 的公开构建号。它的存在说明官方自己也在某个地方需要回填 changeset，而 `FromString` 的 `defaultChangeSet` 参数默认是 0 而不是它——**两者不一致，用的时候要显式传。** |
| `[JsonConverter]` | `[JsonConverter(typeof(ApplicationVersionJsonConverter))]`（类型特性，第 7-8 行） | 让 Newtonsoft 在序列化这个结构体时走自定义转换器（详见 [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 页）。**五个属性全部标了 `[JsonIgnore]`**，因为序列化格式是一个 `_version` 字符串而非对象。 |

## 真实示例

解析与字符串化——这是最常用的两个成员：

```csharp
// Three segments -> ChangeSet falls back to defaultChangeSet (0 by default).
ApplicationVersion shortForm = ApplicationVersion.FromString("v1.2.3");
Debug.Print("short = " + shortForm, 0);
Debug.Print("stage = " + shortForm.ApplicationVersionType, 0);

// Four segments -> ChangeSet is parsed. e = EarlyAccess.
ApplicationVersion withChangeset = ApplicationVersion.FromString("e1.8.0.0");
Debug.Print("early access = " + withChangeset, 0);

// Pass the changeset explicitly when you need a non-zero fallback.
ApplicationVersion withFallback = ApplicationVersion.FromString("v1.2.3",
    ApplicationVersion.DefaultChangeSet);

// Invalid has prefix "i", so Empty stringifies to an i-1.-1.-1.-1 shape.
Debug.Print("empty = " + ApplicationVersion.Empty, 0);
```

本页的核心——**同一对版本，两套比较给出不同答案**：

```csharp
ApplicationVersion olderBuild = ApplicationVersion.FromString("v1.2.3.100");
ApplicationVersion newerBuild = ApplicationVersion.FromString("v1.2.3.200");

// operator< does NOT look at ChangeSet, so it calls these equal.
Debug.Print("operator==            : " + (olderBuild == newerBuild), 0);
Debug.Print("operator<             : " + (olderBuild < newerBuild), 0);

// IsOlderThan DOES look at ChangeSet.
Debug.Print("IsOlderThan           : " + olderBuild.IsOlderThan(newerBuild), 0);
Debug.Print("IsSame(checkChangeSet): " + olderBuild.IsSame(newerBuild, true), 0);

// Use IsOlderThan when the question is about builds, not just release lines.
```

存档迁移判断的标准写法——全部走 `operator<`，这是全树的既有风格：

```csharp
private void OnCampaignLoaded()
{
    // MBSaveLoad is a static class; LastLoadedGameVersion is a static property.
    ApplicationVersion loaded = MBSaveLoad.LastLoadedGameVersion;

    // The early-access migration in the campaign layer uses exactly this shape.
    if (loaded < ApplicationVersion.FromString("e1.8.0.0"))
    {
        Debug.Print("save predates 1.8 early access", 0);
    }

    // When you care about strict equality including the build, use IsSame.
    if (loaded.IsSame(ApplicationVersion.FromString(ApplicationVersion.Empty.ToString()), true))
    {
        Debug.Print("no usable version on this save", 0);
    }
}
```

## 风险与边界

- **`operator<` / `>` / `<=` / `>=` 都不比较 `ChangeSet`，而 `IsOlderThan` 比较。** 同一个语义有两套实现且结果不同。**跨构建比较必须用 `IsOlderThan` / `IsSame(other, true)`，不能用运算符。**
- **`GetHashCode()` 违反 `Equals` 契约。** 它 `return base.GetHashCode();`（基于字段内存布局），而 `Equals` 依赖只比到 `Revision` 的 `operator==`。**两个 `Equals` 相等的实例哈希不同 → 禁止作为 `Dictionary` / `HashSet` 的键。**
- **`operator==` 忽略 `ChangeSet`。** 同一个版本的不同构建被判为相等。**「我改了什么吗」这类判断不能用它。**
- **`FromString` 抛裸 `Exception`。** 段数不对时 `throw new Exception("Wrong version as string")`（`:60-63`）。**没有自定义异常类型**，只能 `catch (Exception)` 兜。
- **`FromString` 会越界。** `:65` 直接索引 `array[0][0]`，所以 `FromString(".1.2")` 抛 `IndexOutOfRangeException`。**外部输入的版本串必须先自己校验。**
- **`FromParametersFile` 硬编码三层 XML 下钻。** `xmlDocument.ChildNodes[0].ChildNodes[0].Attributes["Value"].InnerText`（`:53`）。**XML 结构变一层就是 IndexOutOfRange。** 它走的是 `VirtualFolders.GetFileContent`（虚拟文件系统）而不是 `System.IO`，所以沙盒路径也有效。
- **`Empty.ToString()` 是 `i-1.-1.-1.-1`。** 因为 `GetPrefix(Invalid)` 返回 `"i"`。**`Campaign.cs:626` 真的把这个串拼进模块标识里**，所以存档里可能存在看起来像乱码的版本串。
- **阶段压过版本号。** `Development`(4) > `Release`(3)，所以 `d1.0.0` 比 `v9.9.9` 新。**这是设计意图（内部构建覆盖发行版），但不要用它向玩家解释版本新旧。**
- **构造器零校验。** 负数主版本、负数 changeset 全都允许构造。
- **`DefaultChangeSet` 与 `FromString` 的默认值不一致。** 常量是 115628，而 `FromString` 的 `defaultChangeSet` 参数默认是 **0**。**要回填官方构建号必须显式传参。**
- **它是值类型但不是 `readonly`。** 四个属性都是 `{ get; private set; }`，所以在类型内部可变、**外部不可变**。`Empty` 是 `static readonly` 字段，其成员同样不可改。
- **JSON 格式是字符串而非对象。** 经 [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 序列化成 `{ "_version": "v1.2.3.4" }`，**且五个属性全部 `[JsonIgnore]`**——直接 `JsonConvert.SerializeObject` 一个含本类型的对象不会得到字段形式。

## 跨版本提示

`ApplicationVersion.cs` 在 1.4.5 是 249 行，是原始源码形态（`[Serializable]` + `[JsonConverter]` 特性齐全、无 `// Token:` 注释）。**跨版本迁移真正要核对的是三件事**：一，**运算符与 `IsOlderThan` 的 `ChangeSet` 分歧是否已被修掉**——这是最值得盯的，因为它是语义级的差异而不是 API 级的；二，**`GetHashCode` 是否开始与 `Equals` 一致**——如果修了，说明官方接受了这个类型作为字典键；三，**`DefaultChangeSet` 常量的值**（1.4.5 是 115628），它是编译期常量，升级后会变但**你的代码里不会收到任何提示**。另外注意 1.4.x 后期版本为 `ApplicationVersion` 引入了 `ApplicationVersionType` 的新成员时，`GetPrefix` 的 switch 与 `ApplicationVersionTypeFromString` 的 case 标签集合必须同步扩展，否则新成员会落到 `_ => "i"` 分支上。

## 依赖关系

- 阶段枚举：[ApplicationVersionType](../ApplicationVersionType)，`ApplicationVersionType` 属性的类型；`IsOlderThan` 与 `operator>` 都先比较它
- 前缀映射：`ApplicationVersion.GetPrefix`（`:133-146`）与 `ApplicationVersionTypeFromString`（`:101-121`）构成双向映射
- JSON 转换器：[ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 通过类型特性绑定，负责 `{ "_version": "..." }` 形态
- XML 版本文件：`FromParametersFile` 依赖 `VirtualFolders.GetFileContent` 与 `BasePath.Name`（后者又依赖 [ApplicationPlatform](../ApplicationPlatform)）
- 运行时来源：`TaleWorlds.DotNet/Controller.cs:43` 是全树唯一的 `ApplicationPlatform.Initialize` 调用点，与本类型同属启动期全局状态
- 存档来源：`MBSaveLoad.LastLoadedGameVersion` 产出本类型；`MBSaveLoad.IsUpdatingGameVersion` 决定是否执行迁移
- 主要消费方（Campaign 层）：`../../campaign/Clan.cs:749-820`、`../../campaign/Campaign.cs:612-629`、`../../campaign/CampaignPeriodicEventManager.cs:199`、`../../campaign/CharacterRelationManager.cs:153`
- 序列化特性：`[Serializable]`、`[JsonIgnore]`（五个属性各一个）
- 桶首页：[core-extra API 分区](../)