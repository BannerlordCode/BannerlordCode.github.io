---
title: "ApplicationVersion"
description: "版本号结构体：类型位加主次修订构建四段，配齐 FromString/FromParametersFile 解析与一整套比较运算符，是所有存档版本门禁（MBSaveLoad.LastLoadedGameVersion < ...）的通用货币。"
---

# ApplicationVersion

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct ApplicationVersion`
**Base:** 无（隐式 `System.ValueType`）；类级特性 `[JsonConverter(typeof(ApplicationVersionJsonConverter))]` + `[Serializable]`
**File:** `TaleWorlds.Library/ApplicationVersion.cs`（301 行 / 9366 字节）

## 概述

`ApplicationVersion` 是引擎对「一个版本号」的完整表达。它是 `struct`，五个只读字段全部 `private set`：`ApplicationVersionType`（通道，见 [ApplicationVersionType](../ApplicationVersionType)）、`Major`、`Minor`、`Revision`、`ChangeSet`（构建号）。字符串形态固定为 `前缀.主.次.修.构建`，例如 `v1.3.0.89406`、`e1.8.1.0`、`d1.0.0.1`。

它是**存档版本门禁的唯一货币**。整个代码库里有几十处这样的写法（[Campaign](../../campaign/Campaign)、[CraftingCampaignBehavior](../../campaign/CraftingCampaignBehavior)、[ClanVariablesCampaignBehavior](../../campaign/ClanVariablesCampaignBehavior)、StoryMode 的各个 Behavior……）：

```csharp
if (MBSaveLoad.IsUpdatingGameVersion && MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("v1.3.0", 0))
```

写新版兼容分支时，你几乎永远要写这一行。所以这一页最该讲清楚的不是「有哪几个方法」，而是**两套比较语义互不相同**这件事。

## 心智模型

把它当成**「读档时的旧版本 vs 我这次要写的版本」的比较器**就对了，别的都顺。左值来自存档（`MBSaveLoad.LastLoadedGameVersion`，由 `loadResult.MetaData.GetApplicationVersion()` 读出），右值是你硬编码的字面量。整套机制只有三个动作：**把字符串解析成结构体 → 比较 → 按需要改数据**。

解析有两条入口。`FromString(string, int defaultChangeSet = 0)` 是主力：先按 `'.'` 切分，**段数必须恰好是 3 或 4，否则 `throw new Exception("Wrong version as string")`**；`array[0][0]` 拿去判通道、`array[0].Substring(1)` 是主版本，其余依次是次/修订，第四段存在就是 `ChangeSet`、不存在就用 `defaultChangeSet`。`FromParametersFile(string customParameterFilePath = null)` 是便捷封装：读 `BasePath.Name + "Parameters/Version.xml"`，取 `xmlDocument.ChildNodes[0].ChildNodes[0].Attributes["Value"].InnerText` 再交给 `FromString`；文件内容为空串时**直接返回 `ApplicationVersion.Empty`**（`-1,-1,-1,-1`），不抛异常。

然后是那套**必须分清的三组比较**。这是本页最重要的一段：

| 写法 | 是否看 ChangeSet | 实现 |
| --- | --- | --- |
| `==` / `!=` / `Equals` / `operator >` / `operator <` / `>=` / `<=` | **不看** | `==` 只比四段（类型/主/次/修）；`>` 只比类型→主→次→修，逐级相等才往下；`<` 是 `!(a == b) && !(a > b)` |
| `IsSame(other, checkChangeSet)` | 看 `checkChangeSet` 参数 | 前三段相等，且 `checkChangeSet` 为 true 时才追加比 `ChangeSet` |
| `IsOlderThan(other)` | **看** | 逐级比较到第四级：`Revision` 相等且 `this.ChangeSet < other.ChangeSet` 才算老 |
| `IsNewerThan(other)` | **看** | `!IsSame(other, true) && !IsOlderThan(other)` |

于是同一对版本可能出现这个局面：`v1.3.0.1` 与 `v1.3.0.2` 满足 `==`（相等）、同时 `IsOlderThan` 为 true。**`==` 说相等、`IsOlderThan` 说更老——两者都没错，因为它们问的不是同一个问题。** 官方代码里的实际用法规律是：写数据兼容分支用 `<` / `IsOlderThan`（跟大多数官方写法一致），而 `Campaign.OnLoad` 那种「比较存档版本」的 `Equals` 语义只用 `==`。

第三个坑是 `GetHashCode()` 的实现就一句 `return base.GetHashCode();`。也就是**同一个值赋给两个变量会得到不同的哈希**，`==` 与 `GetHashCode` 不自洽。所以**绝对不要把 `ApplicationVersion` 放进 `Dictionary` / `HashSet`**，也不要 `List.Contains`（它走 `Equals` 还算对，但 `Dictionary` 走 `GetHashCode` 就废了）。

最后一个坑是 `Empty` 的字符串形态。`GetPrefix` 的 `default` 分支给 `Invalid` 返回 `"i"`，于是 `ApplicationVersion.Empty.ToString()` 是 `"i-1.-1.-1.-1"`——**这个怪串是真的会被写进存档的**，[Campaign](../../campaign/Campaign).`OnLoad` 第 782 行就用 `ApplicationVersion.Empty.ToString()` 给老存档的模块列表补版本后缀。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ApplicationVersionType` | `[JsonIgnore] public ApplicationVersionType ApplicationVersionType { get; private set; }` | 版本通道位，字符串首字符（`a`/`b`/`e`/`v`/`d`）。它排在比较的第一优先级——通道不同就直接决定新旧。 |
| `Major` | `[JsonIgnore] public int Major { get; private set; }` | 主版本号。 |
| `Minor` | `[JsonIgnore] public int Minor { get; private set; }` | 次版本号。 |
| `Revision` | `[JsonIgnore] public int Revision { get; private set; }` | 修订号。官方绝大多数门禁只用到这一层。 |
| `ChangeSet` | `[JsonIgnore] public int ChangeSet { get; private set; }` | 构建号。**只有 `IsOlderThan` / `IsSame(other, true)` / `IsNewerThan` 会看它**，四个比较运算符都不看。 |
| 构造函数 | `public ApplicationVersion(ApplicationVersionType, int, int, int, int)` | 五个 setter 全是 `private`，所以这是唯一的构造路径。直接 `new ApplicationVersion(ApplicationVersionType.Release, 1, 3, 0, 0)` 是合法的。 |
| `FromString` | `public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)` | 主解析入口。**段数必须是 3 或 4，否则抛 `Exception("Wrong version as string")`**；通道字符只取第一个；数字段用 `Convert.ToInt32`（非 `int.TryParse`）。 |
| `FromParametersFile` | `public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)` | 读 `Parameters/Version.xml` 并调 `FromString`。**文件内容为空串时返回 `Empty` 而不是抛异常**。传 null 路径时用 `BasePath.Name` 前缀，所以它依赖 [BasePath](../BasePath) 已初始化。 |
| `IsSame` | `public bool IsSame(ApplicationVersion other, bool checkChangeSet)` | 前三段相等性判定，`checkChangeSet` 决定是否追加第四段。官方主要用它替代裸 `==`，因为裸 `==` 不看 `ChangeSet`。 |
| `IsOlderThan` | `public bool IsOlderThan(ApplicationVersion other)` | 逐级比较（类型→主→次→修→**构建**）。**唯一一段逐级比较到 `ChangeSet` 的公开方法。** |
| `IsNewerThan` | `public bool IsNewerThan(ApplicationVersion other)` | `!IsSame(other, true) && !IsOlderThan(other)`。**注意它是「既不同也不老」，所以相等返回 false，但同三段不同构建号也返回 true。** |
| `ApplicationVersionTypeFromString` | `public static ApplicationVersionType ApplicationVersionTypeFromString(string)` | 只认 `"a"`/`"b"`/`"e"`/`"v"`/`"d"` 五个小写字符；其它输入 `Debug.FailedAssert` 后返回 `Invalid`（不抛）。 |
| `GetPrefix` | `public static string GetPrefix(ApplicationVersionType)` | 反向映射。五个已知通道各返回单字符，`default` 分支（含 `Invalid`）返回 `"i"`。 |
| `ToString` | `public override string ToString()` | `prefix + Major + "." + Minor + "." + Revision + "." + ChangeSet`。**永远四段**，`Empty` 因此产出 `"i-1.-1.-1.-1"`。 |
| `operator ==` / `!=` | `public static bool operator ==(ApplicationVersion a, ApplicationVersion b)` | 只比四段（不含 `ChangeSet`）。`!=` 是 `!(a == b)`。 |
| `operator >` | `public static bool operator >(ApplicationVersion a, ApplicationVersion b)` | 逐级比较但**在 `Revision` 停下，不看 `ChangeSet`**。所以 `v1.3.0.1 > v1.3.0.2` 为 false。 |
| `operator <` | `public static bool operator <(ApplicationVersion a, ApplicationVersion b)` | `!(a == b) && !(a > b)`，间接继承「不看 `ChangeSet`」。 |
| `operator >=` / `<=` | `public static bool operator >=(ApplicationVersion a, ApplicationVersion b)` | 分别是 `a == b \|\| a > b` 与 `a == b \|\| a < b`。 |
| `Equals` | `public override bool Equals(object obj)` | `obj != null && !(base.GetType() != obj.GetType()) && (ApplicationVersion)obj == this`。类型不等直接 false。 |
| `GetHashCode` | `public override int GetHashCode()` | **就是 `return base.GetHashCode();`**——身份哈希，与相等性无关。见下面的风险段。 |
| `DefaultChangeSet` | `public const int DefaultChangeSet = 89406;` | 常量，1.3.0 的构建号。**全树零引用**（除了它自己的定义），是个纯粹的历史残留。 |
| `Empty` | `[JsonIgnore] public static readonly ApplicationVersion Empty` | `new ApplicationVersion(Invalid, -1, -1, -1, -1)`。用于「没有版本」的哨兵场景，也是 [MetaDataExtensions](../MetaDataExtensions) 在解析失败时的返回值。 |

## 真实示例

最常见的一条：读档时发现存档来自旧版本，就跑一段数据迁移（照 [ClanVariablesCampaignBehavior](../../campaign/ClanVariablesCampaignBehavior) 第 297 行的写法）：

```csharp
protected override void OnSessionStart(Campaign campaign)
{
    base.OnSessionStart(campaign);
    if (MBSaveLoad.IsUpdatingGameVersion
        && MBSaveLoad.LastLoadedGameVersion.IsOlderThan(ApplicationVersion.FromString("v1.2.9", 0)))
    {
        foreach (Clan clan in Clan.All)
        {
            if (clan.Leader != null && clan.Leader.Clan != clan)
            {
                ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(clan);
            }
        }
    }
}
```

比较两边的**实际安装版本**和**存档记录的版本**（照 [SandBoxSaveHelper](../../campaign-ext/SandBoxSaveHelper) 第 155–156 行的写法）：

```csharp
ApplicationVersion saveVersion = MetaDataExtensions.GetApplicationVersion(saveGameFileInfo.MetaData);
ApplicationVersion installed = Utilities.GetApplicationVersionWithBuildNumber();
Debug.Print("save = " + saveVersion + " installed = " + installed, 0);
if (saveVersion.IsNewerThan(installed))
{
    Debug.Print("this save was written by a newer build", 0);
}
```

自己造一个版本门槛常量（注意 `FromString` 的段数校验：三段合法，四段合法，两段或五段都会抛）：

```csharp
public static readonly ApplicationVersion MySchemaFloor = ApplicationVersion.FromString("v1.3.0", 0);
public static readonly ApplicationVersion MySchemaCeil = ApplicationVersion.FromString("v1.3.0", 999999);

public static bool IsSchemaSupported(ApplicationVersion saveVersion)
{
    return !saveVersion.IsOlderThan(MySchemaFloor) && saveVersion.IsOlderThan(MySchemaCeil);
}
```

把版本号安全地写进日志而不是字典（`GetHashCode` 不可用，只能靠 `==` 与 `ToString`）：

```csharp
string[] known = new string[] { "v1.2.0", "v1.3.0", "e1.8.1.0" };
for (int i = 0; i < known.Length; i++)
{
    ApplicationVersion v = ApplicationVersion.FromString(known[i], 0);
    Debug.Print(known[i] + " -> type=" + v.ApplicationVersionType + " changeSet=" + v.ChangeSet + " olderThan130=" + v.IsOlderThan(ApplicationVersion.FromString("v1.3.0", 0)), 0);
}
```

## 风险与边界

- **`GetHashCode` 与 `Equals` 不自洽。** `GetHashCode()` 就是 `base.GetHashCode()`，所以两个值相等的 `ApplicationVersion` 哈希不同。**放进 `Dictionary` / `HashSet` 一定坏。**
- **两套比较语义。** `==` / `>` / `<` / `>=` / `<=` **不看 `ChangeSet`**；`IsOlderThan` / `IsNewerThan` / `IsSame(other, true)` **看**。混用会出现「`==` 说相等、`IsOlderThan` 说更老」。
- **`FromString` 会抛异常。** 段数不是 3 或 4 → `throw new Exception("Wrong version as string")`；数字段非法 → `Convert.ToInt32` 抛 `FormatException`；`versionAsString` 为 `""` 会先在 `array[0][0]` 上越界。**它不是 `TryFromString`。** 解析外部输入必须自己先 try。
- **`FromParametersFile` 静默降级。** `Version.xml` 读不到内容时返回 `Empty`（全 -1），而不是抛异常。此时 `Empty.IsOlderThan(任何版本)` 为 **true**，会让所有版本门禁全部命中。
- **通道字符只取第一个。** `"alpha1.2.3"` 会被切成 `"a"` + `"lpha1"`，然后 `Convert.ToInt32("lpha1")` 抛异常。前缀必须恰好一个字符。
- **`Empty.ToString()` 是 `"i-1.-1.-1.-1"`。** [Campaign](../../campaign/Campaign).`OnLoad` 会把这个串写进存档的模块版本后缀，看到它别以为是数据损坏。
- **`Invalid` 的前缀往返是断的。** `GetPrefix(Invalid)` 给 `"i"`，但 `ApplicationVersionTypeFromString("i")` 不接受 `"i"`。
- **`ApplicationVersionType` 的数值顺序有语义。** `Invalid=-1` 最小、`Development=4` 最大，所以 `d1.0.0.0` 被判为比 `v9.0.0.0` 新。详见 [ApplicationVersionType](../ApplicationVersionType)。
- **`ToString` 永远四段。** 没有「三段」形态，比较字符串时别用 `==`。
- **类级 `[JsonConverter]` 让 `[JsonIgnore]` 形同虚设。** 五个属性上的 `[JsonIgnore]` 是冗余的——真正决定形状的是 [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 的 `WriteJson`。
- **`DefaultChangeSet` 无引用。** 它是 1.3.0 的构建号常量，全树没有任何地方读它。别拿它当「当前版本」的可靠来源。
- **struct 值拷贝。** 同其它 struct，赋值即拷贝；`Empty` 是 `static readonly`，赋给局部变量后修改局部变量不会影响 `Empty`。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/ApplicationVersion.cs:10`，`public struct`，全部五个属性都是 `private set`（`ApplicationVersion.cs:16` / `:22` / `:28` / `:34` / `:40`）。所以你只有三种拿法：五参数构造 `ApplicationVersion(ApplicationVersionType, int, int, int, int)`（`ApplicationVersion.cs:43`）、静态工厂 `FromString(string, int defaultChangeSet = 0)`（`ApplicationVersion.cs:67`）、静态工厂 `FromParametersFile(string path = null)`（`ApplicationVersion.cs:53`，读 `Parameters/Version.xml`，内容为空时返回 `ApplicationVersion.Empty`）。`Empty` 是唯一的静态字段，值为 `(Invalid, -1, -1, -1, -1)`（`ApplicationVersion.cs:299`）。

引擎自己拿它做存档迁移，模式是固定的：拿 `MBSaveLoad.IsUpdatingGameVersion` 当闸门，再拿存档记录的版本跟你写死的门槛比 —— [ClanVariablesCampaignBehavior](../../campaign/ClanVariablesCampaignBehavior) 第 297 行写的是 `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("v1.2.9", 0)`，[SandBoxSaveHelper](../../campaign-ext/SandBoxSaveHelper) 第 42 行写的是 `saveVersion.IsOlderThan(ApplicationVersion.FromString("v1.3.0", 0))`，两种写法引擎自己都在用。

**一段可直接跑的「同版本不同 build」判别**（这是本类型独有的能力，值得单独写成方法）：

```csharp
// IsSame 的第二个参数决定 ChangeSet 参不参与比较（ApplicationVersion.cs:89）。
// 两个 build 号不同、三段版本号相同的版本，IsSame(_, false) 为 true 而 IsSame(_, true) 为 false。
public static bool IsSameReleaseButOlderBuild(ApplicationVersion save, ApplicationVersion installed)
{
    return save.IsSame(installed, false) && !save.IsSame(installed, true);
}

// 跨版本门槛一律走 IsOlderThan / IsSame，不要用 operator >（原因见下方）。
public static bool NeedsSchemaMigration(ApplicationVersion from, ApplicationVersion floor)
{
    return from.IsOlderThan(floor);
}
```

**最常见的坑：把 `ApplicationVersion` 放进 `Dictionary` / `HashSet` 当键。** 它违反相等性契约：`Equals` 和 `operator ==`（`ApplicationVersion.cs:243` / `:225`）是**结构化**比较，而 `GetHashCode()` 直接 `return base.GetHashCode();`（`ApplicationVersion.cs:237`），也就是对象身份。同一个 `v1.3.0.89406` 你 new 两次就得到两个哈希桶，字典查找会 miss。后果最难受的形态不是崩溃，而是**按版本号分发的存档迁移静默不触发**——`Dictionary<ApplicationVersion, Action>` 里注册了迁移，用 `if (table.ContainsKey(saveVersion))` 判断，条件永远为 false，游戏正常加载但你的迁移一次都没跑，而你没有任何报错可查。

顺带一个同源问题：`operator >`（`ApplicationVersion.cs:249`）只比 `ApplicationVersionType` / `Major` / `Minor` / `Revision`，**不比 `ChangeSet`**，而 `IsOlderThan`（`ApplicationVersion.cs:95`）比全五项。所以两个只有 build 号不同的版本，`a > b` 与 `!a.IsOlderThan(b)` 会给出相反的结论。列表排序统一走 `IsOlderThan`，不要走 `>`。

## 跨版本提示

`ApplicationVersion.cs` 在五棵树（`bannerlord-1.3.0/` / `bannerlord-1.3.15/` / `bannerlord-1.4.6/` / `bannerlord-1.4.7/` / `bannerlord-1.5.3/`）里**公开表面完全一致**：同样是 5 个 `private set` 属性、1 个构造函数、`FromParametersFile` / `FromString` / `IsSame` / `IsOlderThan` / `IsNewerThan` / `ApplicationVersionTypeFromString` / `GetPrefix` / `ToString` / 6 个运算符 / `Equals` / `GetHashCode` / `DefaultChangeSet` / `Empty`。

真正的差异有两处，都不影响编译：

1. **`DefaultChangeSet` 变了**——1.3.0 是 `89406`，1.4.6 / 1.4.7 / 1.5.3 都是 `115628`。1.3.15 是 9418 字节（1.3.0 是 9366 字节），差异同样只在反编译产物层面。
2. **反编译产物形态不同**——1.4.6 起 `string.Concat(new object[] { ... })` 折成了一行、`Split(new char[] { '.' })` 折成一行、`result` 变量被重命名为 `text` / `num`。**纯排版差异，语义零变化。**

结论：**升级 Bannerlord 不会让你的版本门禁编译不过，但 `ChangeSet` 的实际数值会变**——所以门禁请锁在 `Major`/`Minor`/`Revision`（官方自己的写法就是 `FromString("v1.3.0", 0)`），别拿构建号当阈值。

配套的 [ApplicationVersionType](../ApplicationVersionType)（403 字节，五棵树逐字节一致）与 [ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)（1.3.0 是 1291 字节、1.3.15 起 1244 字节）也保持同一套语义。

## 依赖关系

- 类型位：[ApplicationVersionType](../ApplicationVersionType) 是 `ApplicationVersionType` 字段的类型，也是 `GetPrefix` / `ApplicationVersionTypeFromString` 的映射对象
- JSON 形态：[ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 由类级特性挂上来，把整个结构压成 `{"_version": "v1.3.0.89406"}` 单字段
- 存档版本门禁：[MBSaveLoad](../MBSaveLoad) 的 `LastLoadedGameVersion` / `CurrentVersion` / `IsUpdatingGameVersion` 是本类型左值的来源，`CurrentVersion` 就是 `FromParametersFile(null)`
- 版本获取入口：[Utilities](../../engine/Utilities) 的 `GetApplicationVersionWithBuildNumber()` 直接返回 `FromParametersFile(null)`
- 元数据读取：[MetaDataExtensions](../MetaDataExtensions) 的 `GetModuleVersion` 调 `FromString`，解析失败时兜底返回 `Empty`
- 门禁的实际消费方：[Campaign](../../campaign/Campaign) 的 `OnLoad`、`CraftingCampaignBehavior`、`ClanVariablesCampaignBehavior`、`HeroKnownInformationCampaignBehavior` 等几十个 `OnLoad` 回调
- 根目录依赖：[BasePath](../BasePath) 决定 `FromParametersFile` 默认路径的 `BasePath.Name` 前缀，[VirtualFolders](../VirtualFolders) 负责读那个 XML
- 断言输出：[Debug](../Debug) 的 `FailedAssert` 是通道解析失败的唯一信号
- 桶首页：[core-extra API 分区](../)