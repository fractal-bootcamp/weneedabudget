import {
  PlusCircle,
  FileIcon,
  LucideUndo,
  LucideRedo,
  ChevronDown,
  SearchIcon,
} from 'lucide-react'
interface ActionBarProps {
  onAddTransaction: () => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}
function ActionBar({
  onAddTransaction,
  searchTerm,
  setSearchTerm,
}: ActionBarProps) {
  return (
    <div className="flex flex-row justify-between p-3 text-sm text-indigo-600">
      <div className="flex flex-row gap-2">
        <button className="flex items-center gap-1" onClick={onAddTransaction}>
          <PlusCircle className="h-4 w-4" />
          <span>Add Transaction</span>
        </button>
        <button className="flex items-center gap-1 text-indigo-300">
          <FileIcon className="h-4 w-4" />
          <span>File Import</span>
        </button>
        <button className="flex items-center gap-1 text-indigo-300">
          <LucideUndo className="h-4 w-4" />
          <span>Undo</span>
        </button>
        <button className="flex items-center gap-1 text-indigo-300">
          <LucideRedo className="h-4 w-4" />
          <span>Redo</span>
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <button className="flex items-center gap-1 text-indigo-300">
          {' '}
          View <ChevronDown className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <SearchIcon className="h-5 w-5" />
          <input
            className="box-border px-2 py-1"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}
export default ActionBar
