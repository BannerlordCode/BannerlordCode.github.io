# save-object-graph — 关键成员表 逐字替换规格（verified facts pack）

> 产出者：lead-22（派单方）。用途：把 `content/v1.3.15/{zh,en}/architecture/save-object-graph.md` 的
> `## 关键成员` 整节替换为**与源码真身一致**的版本。
> 事实来源：`bannerlord-1.3.15/` 逐行 `sed -n 'Np' <file>`，lead-22 亲核。
> **worker 只需转录，不需要任何判断，也不需要读源码。**

---

> **★ 取数纪律（lead-22 自曝事故，2026-10-07）**：本文件早先版本把 `CollectTypes` 写成 `DefinitionContext.cs:278`，
> 真值是 **`:279`**（278 行是 `// Token: …` 注释）。
> **错因**：从 `sed -n '275,300p'` 的**窗口内**计数，而不是整文件 `grep -n` / `awk 'NR==N'`。
> **J3 抓不到**：278 在界内（文件 >278 行）⇒ 假 PASS。
> ⇒ **所有内联行号必须来自单次权威取数（整文件 `grep -n` 或 `awk 'NR==N'`），不得来自任何经过管道裁剪的输出。**

## 0. 为什么必须整节替换（不要逐行打补丁）

现表「行号全真、语义几乎全错」，连基类 `SaveManagerBase` 都是编的：

| 引用 | 真身（已核） | 现表写的 |
|---|---|---|
| `SaveManager.cs:14` | `public static class SaveManager` | 继承自 `SaveManagerBase`（静态类不能继承，且无此类） |
| `SaveManager.cs:17` | `public static void InitializeGlobalDefinitionContext()` | 静态实例访问点 |
| `SaveManager.cs:69` | `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` | `SaveGame` 方法 |
| `DefinitionContext.cs:68` | `internal void AddClassDefinition(TypeDefinition classDefinition)` | `DefineTypes` 入口 |
| `DefinitionContext.cs:173` | `public void FillWithCurrentTypes()` | 类型注册逻辑 |
| `DefinitionContext.cs:279` | `private void CollectTypes(Assembly assembly)` | 类型查找 |
| `DefinitionContext.cs:283` | `if (typeof(SaveableTypeDefiner).IsAssignableFrom(type) && !type.IsAbstract)` | 版本兼容检查 |
| `DefinitionContext.cs:285` | `SaveableTypeDefiner saveableTypeDefiner = (SaveableTypeDefiner)Activator.CreateInstance(type);` | 类型别名映射 |
| `SaveableTypeDefiner.cs:13` | `protected SaveableTypeDefiner(int saveBaseId)` | 接收 `DefinitionContext` |
| `SaveableTypeDefiner.cs:30` | `protected internal virtual void DefineClassTypes()` | `DefineTypes` 虚方法 |
| `SaveableTypeDefiner.cs:70` | `protected internal virtual void DefineContainerDefinitions()` | 类型注册辅助方法 |
| `SaveableTypeDefiner.cs:157` | `protected void ConstructContainerDefinition(Type type)` | 嵌套类型注册 |
| `SaveContext.cs:27` | `public DefinitionContext DefinitionContext { get; private set; }` | `WriteObject` 方法 |
| `SaveContext.cs:46` | `public SaveContext(DefinitionContext definitionContext)` | `Write` 泛型方法 |
| `SaveContext.cs:278` | `public bool Save(object target, MetaData metaData, out string errorMessage)` | 引用表管理 |
| `LoadContext.cs:31` | `public DefinitionContext DefinitionContext { get; private set; }` | `ReadObject` 方法 |
| `LoadContext.cs:64` | `public bool Load(LoadData loadData, bool loadAsLateInitialize)` | `Read` 泛型方法 |
| `SaveableCampaignTypeDefiner.cs:44` | `public SaveableCampaignTypeDefiner()` | `DefineTypes` 实现 |
| `SaveableCampaignTypeDefiner.cs:50` | `protected override void DefineClassTypes()` | 注册 Party 相关类型 |
| `SaveableCampaignTypeDefiner.cs:52` | `base.AddClassDefinition(typeof(Army), 3, null);` | 注册 Settlement 相关类型 |

---

## 1. zh 版（逐字替换 `## 关键成员` 整节，到 `## 真实示例` 之前）

```
## 关键成员

### SaveManager

存档系统门面。

- `SaveManager.cs:14` — `public static class SaveManager`：存档系统入口类。**是静态类，没有基类，也没有 `Instance` 属性。**
- `SaveManager.cs:17` — `public static void InitializeGlobalDefinitionContext()`：启动期一次性初始化 `DefinitionContext` 并调用 `FillWithCurrentTypes()`。
- `SaveManager.cs:69` — `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`：存档入口。
- `SaveManager.cs:149` — `public static LoadResult Load(string saveName, ISaveDriver driver)`：读档入口。

### DefinitionContext

类型定义中心，维护「类型 → 定义」的映射。

- `DefinitionContext.cs:10` — `public class DefinitionContext`：定义上下文本体。
- `DefinitionContext.cs:68` — `internal void AddClassDefinition(TypeDefinition classDefinition)`：把一个类型定义登记进上下文。
- `DefinitionContext.cs:173` — `public void FillWithCurrentTypes()`：启动期扫描程序集、收齐全部类型定义。
- `DefinitionContext.cs:279` — `private void CollectTypes(Assembly assembly)`：对单个程序集做反射收集。
- `DefinitionContext.cs:283` — `if (typeof(SaveableTypeDefiner).IsAssignableFrom(type) && !type.IsAbstract)`：筛出非抽象的 `SaveableTypeDefiner` 子类。
- `DefinitionContext.cs:285` — `SaveableTypeDefiner saveableTypeDefiner = (SaveableTypeDefiner)Activator.CreateInstance(type);`：反射实例化 Definer —— **这就是「不需要也不能手动 Register」的原因**。

### SaveableTypeDefiner

为某个模块定义可序列化类型的基类。

- `SaveableTypeDefiner.cs:10` — `public abstract class SaveableTypeDefiner`：基类声明。
- `SaveableTypeDefiner.cs:13` — `protected SaveableTypeDefiner(int saveBaseId)`：构造只接收**基号**（不是 `DefinitionContext`）。
- `SaveableTypeDefiner.cs:30` — `protected internal virtual void DefineClassTypes()`：重写它来注册类。
- `SaveableTypeDefiner.cs:70` — `protected internal virtual void DefineContainerDefinitions()`：重写它来注册容器类型。
- `SaveableTypeDefiner.cs:100` — `protected void AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`：注册一个类定义并分配小 id。
- `SaveableTypeDefiner.cs:157` — `protected void ConstructContainerDefinition(Type type)`：为一个容器类型构造定义。

### SaveContext

存档时的写入上下文。

- `SaveContext.cs:12` — `public class SaveContext : ISaveContext`：类声明。
- `SaveContext.cs:27` — `public DefinitionContext DefinitionContext { get; private set; }`：存档时查类型定义用的上下文。
- `SaveContext.cs:46` — `public SaveContext(DefinitionContext definitionContext)`：构造函数。
- `SaveContext.cs:278` — `public bool Save(object target, MetaData metaData, out string errorMessage)`：真正执行写入。

### LoadContext

读档时的读取上下文。

- `LoadContext.cs:11` — `public class LoadContext`：类声明。
- `LoadContext.cs:31` — `public DefinitionContext DefinitionContext { get; private set; }`：读档时查类型定义用的上下文。
- `LoadContext.cs:64` — `public bool Load(LoadData loadData, bool loadAsLateInitialize)`：真正执行读取。

### SaveableCampaignTypeDefiner

Campaign 模块的类型定义器。

- `SaveableCampaignTypeDefiner.cs:41` — `public class SaveableCampaignTypeDefiner : SaveableTypeDefiner`：类声明。
- `SaveableCampaignTypeDefiner.cs:44` — `public SaveableCampaignTypeDefiner()`：无参构造，基号在 `base(...)` 里传。
- `SaveableCampaignTypeDefiner.cs:50` — `protected override void DefineClassTypes()`：注册 Campaign 全部可存档类。
- `SaveableCampaignTypeDefiner.cs:52` — `base.AddClassDefinition(typeof(Army), 3, null);`：官方范本的第一行注册，注册的是 `Army`。
```

---

## 2. en 版（同结构；**真实声明原文一律不译**，只译用途短语）

```
## Key Members

### SaveManager

The save-system facade.

- `SaveManager.cs:14` — `public static class SaveManager`: the save-system entry class. **It is a static class: there is no base class and no `Instance` property.**
- `SaveManager.cs:17` — `public static void InitializeGlobalDefinitionContext()`: initialises the `DefinitionContext` once at startup and calls `FillWithCurrentTypes()`.
- `SaveManager.cs:69` — `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`: the save entry point.
- `SaveManager.cs:149` — `public static LoadResult Load(string saveName, ISaveDriver driver)`: the load entry point.

### DefinitionContext

The type-definition centre; maintains the "type → definition" mapping.

- `DefinitionContext.cs:10` — `public class DefinitionContext`: the definition context itself.
- `DefinitionContext.cs:68` — `internal void AddClassDefinition(TypeDefinition classDefinition)`: registers one type definition into the context.
- `DefinitionContext.cs:173` — `public void FillWithCurrentTypes()`: scans assemblies at startup and collects every type definition.
- `DefinitionContext.cs:279` — `private void CollectTypes(Assembly assembly)`: reflects over a single assembly to collect its types.
- `DefinitionContext.cs:283` — `if (typeof(SaveableTypeDefiner).IsAssignableFrom(type) && !type.IsAbstract)`: filters for non-abstract `SaveableTypeDefiner` subclasses.
- `DefinitionContext.cs:285` — `SaveableTypeDefiner saveableTypeDefiner = (SaveableTypeDefiner)Activator.CreateInstance(type);`: reflects and instantiates the definer — **this is why you neither need nor can call `Register()` manually**.

### SaveableTypeDefiner

Base class for declaring a module's serializable types.

- `SaveableTypeDefiner.cs:10` — `public abstract class SaveableTypeDefiner`: the base-class declaration.
- `SaveableTypeDefiner.cs:13` — `protected SaveableTypeDefiner(int saveBaseId)`: the constructor takes a **base id** (not a `DefinitionContext`).
- `SaveableTypeDefiner.cs:30` — `protected internal virtual void DefineClassTypes()`: override this to register classes.
- `SaveableTypeDefiner.cs:70` — `protected internal virtual void DefineContainerDefinitions()`: override this to register container types.
- `SaveableTypeDefiner.cs:100` — `protected void AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`: registers one class definition and assigns its small id.
- `SaveableTypeDefiner.cs:157` — `protected void ConstructContainerDefinition(Type type)`: constructs the definition for a container type.

### SaveContext

The write-side context used while saving.

- `SaveContext.cs:12` — `public class SaveContext : ISaveContext`: the class declaration.
- `SaveContext.cs:27` — `public DefinitionContext DefinitionContext { get; private set; }`: the context used to look up type definitions while saving.
- `SaveContext.cs:46` — `public SaveContext(DefinitionContext definitionContext)`: the constructor.
- `SaveContext.cs:278` — `public bool Save(object target, MetaData metaData, out string errorMessage)`: the method that actually performs the write.

### LoadContext

The read-side context used while loading.

- `LoadContext.cs:11` — `public class LoadContext`: the class declaration.
- `LoadContext.cs:31` — `public DefinitionContext DefinitionContext { get; private set; }`: the context used to look up type definitions while loading.
- `LoadContext.cs:64` — `public bool Load(LoadData loadData, bool loadAsLateInitialize)`: the method that actually performs the read.

### SaveableCampaignTypeDefiner

The Campaign module's type definer.

- `SaveableCampaignTypeDefiner.cs:41` — `public class SaveableCampaignTypeDefiner : SaveableTypeDefiner`: the class declaration.
- `SaveableCampaignTypeDefiner.cs:44` — `public SaveableCampaignTypeDefiner()`: the parameterless constructor; the base id is passed via `base(...)`.
- `SaveableCampaignTypeDefiner.cs:50` — `protected override void DefineClassTypes()`: registers every saveable Campaign class.
- `SaveableCampaignTypeDefiner.cs:52` — `base.AddClassDefinition(typeof(Army), 3, null);`: the first registration in the official example — it registers `Army`.
```

---

## 3. 另需修的 2 处（不在表内）

**zh** 第 27 行、**en** 第 27 行：`DefineTypes` 出现在**否定句**里（「…这个方法不存在」/「the method `DefineTypes` does not exist」）—— **这是合规的，保留不动**。

**en 第 36 行**（`### Save Flow` 第 1 步）仍是编的：
```
现： 1. Call `SaveManager.SaveGame(string saveName)` to trigger a save.
改： 1. Call `SaveManager.Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` (`SaveManager.cs:69`) to trigger a save; `target` is the root of the object graph.
```
（zh 版对应行已修对，不要动 zh。）

---

## 4. 收尾自检（必须贴原始输出）

```
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
grep -nE '\b(SaveManagerBase|DefineTypes|SaveGame|LoadGame|ReadObject|WriteObject|DefineType|ISaveable)\b' content/v1.3.15/zh/architecture/save-object-graph.md content/v1.3.15/en/architecture/save-object-graph.md ; echo "exit=$?"
node tools/_verify/lead-145zh-judge.mjs content/v1.3.15/zh/architecture/save-object-graph.md content/v1.3.15/en/architecture/save-object-graph.md
node tools/audit-links.mjs 2>&1 | grep -E "^BROKEN_LINKS=|^FILES_WITH_BROKEN="
sha256sum content/v1.3.15/zh/architecture/save-object-graph.md content/v1.3.15/en/architecture/save-object-graph.md
```

**判据**：第一条 grep **只允许输出否定句**（含「不存在 / 没有 / does not exist / There is no」的行），即 zh 第 27/39/47 行与 en 第 27/49 行；**其余任何命中都算失败**。
`BROKEN_LINKS=0`、`FILES_WITH_BROKEN=0`；zh 判分器 `PASS`（J3 bad=0、J6=deep_pass）。
